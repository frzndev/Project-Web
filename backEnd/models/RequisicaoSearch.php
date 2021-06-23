<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Requisicao;

/**
 * RequisicaoSearch represents the model behind the search form of `app\models\Requisicao`.
 */
class RequisicaoSearch extends Requisicao
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'estudante_id', 'equipamento_id', 'quantidade', 'estado'], 'integer'],
            [['data_requisicao'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Requisicao::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'estudante_id' => $this->estudante_id,
            'equipamento_id' => $this->equipamento_id,
            'quantidade' => $this->quantidade,
            'data_requisicao' => $this->data_requisicao,
            'estado' => $this->estado,
        ]);

        return $dataProvider;
    }
}
