from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/simular-creditos', methods=['POST'])
def simular_creditos():
    data = request.get_json()

    regime = data.get('regimeFiscal')
    faturamento = data.get('faturamentoAnual', 0)
    # porte = data.get('porteEmpresa') # Pode ser usado para refinar regras

    estimativa_min = 0
    estimativa_max = 0
    mensagem = "A simulação é uma estimativa e não representa valores definitivos."

    if regime == 'simples_nacional':
        mensagem = "Empresas do Simples Nacional geralmente não acumulam créditos de PIS/COFINS da mesma forma, pois o regime é simplificado. A recuperação pode envolver outros tributos pagos indevidamente."
        # Pode-se estimar algo simbólico ou focar em outros tipos de recuperação.

    elif regime == 'lucro_presumido':
        # PIS/COFINS cumulativo, menos créditos.
        # Exemplo muito simplificado: uma pequena % sobre faturamento se certas condições aplicáveis
        # (raro para PIS/COFINS, mais comum para outros tipos de recuperação)
        # Poderia ser uma faixa baseada em análise de casos comuns para esse regime.
        aliquota_estimada_min = 0.001 # 0.1% (Exemplo ilustrativo)
        aliquota_estimada_max = 0.005 # 0.5% (Exemplo ilustrativo)
        estimativa_min = faturamento * aliquota_estimada_min
        estimativa_max = faturamento * aliquota_estimada_max
        mensagem = "Para Lucro Presumido, a recuperação de PIS/COFINS é limitada. Esta é uma estimativa genérica de possíveis recuperações."

    elif regime == 'lucro_real':
        # PIS/COFINS não cumulativo, mais oportunidades de crédito.
        # Fatores a considerar (simplificadamente):
        # - Alíquotas padrão de PIS (1.65%) e COFINS (7.6%) sobre despesas elegíveis.
        # - Uma estimativa de quanto do faturamento representa despesas que geram crédito.
        #   Isso varia MUITO por setor. Vamos usar um fator heurístico.

        # Fator de despesas elegíveis (ex: 20% a 40% do faturamento podem ser despesas que geram crédito)
        # ESTE É UM CHUTE MUITO GRANDE E DEVE SER CLARAMENTE INDICADO COMO TAL
        fator_despesas_min = 0.10 # 10%
        fator_despesas_max = 0.30 # 30%

        base_calculo_credito_min = faturamento * fator_despesas_min
        base_calculo_credito_max = faturamento * fator_despesas_max

        aliquota_pis_cofins = 0.0165 + 0.076 # 9.25%

        estimativa_min = base_calculo_credito_min * aliquota_pis_cofins
        estimativa_max = base_calculo_credito_max * aliquota_pis_cofins
        mensagem = "Para Lucro Real, a estimativa de créditos de PIS/COFINS é baseada em uma presunção de despesas elegíveis. Consulte um especialista."

    else:
        return jsonify({"erro": "Regime fiscal inválido"}), 400

    return jsonify({
        "estimativaCreditoMin": round(estimativa_min, 2),
        "estimativaCreditoMax": round(estimativa_max, 2),
        "faturamentoAnual": faturamento,
        "regimeFiscal": regime,
        "mensagemInformativa": mensagem
    })

if __name__ == '__main__':
    app.run(debug=True) # Apenas para desenvolvimento