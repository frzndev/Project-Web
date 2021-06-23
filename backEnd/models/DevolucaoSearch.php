<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Devolucao;

/**
 * DevolucaoSearch represents the model behind the search form of `app\models\Devolucao`.
 */
class DevolucaoSearch extends Devolucao
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'requisicao_id'], 'integer'],
            [['data_devolucao'], 'safe'],
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
        $query = Devolucao::find();

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
            'requisicao_id' => $this->requisicao_id,
            'data_devolucao' => $this->data_devolucao,
        ]);

        return $dataProvider;
    }
}
