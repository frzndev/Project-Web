<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "devolucao".
 *
 * @property int $id
 * @property int $requisicao_id
 * @property string|null $data_devolucao
 *
 * @property Requisicao $requisicao
 */
class Devolucao extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'devolucao';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['requisicao_id'], 'required'],
            [['requisicao_id'], 'integer'],
            [['data_devolucao'], 'safe'],
            [['requisicao_id'], 'exist', 'skipOnError' => true, 'targetClass' => Requisicao::className(), 'targetAttribute' => ['requisicao_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'requisicao_id' => 'Requisicao ID',
            'data_devolucao' => 'Data Devolucao',
        ];
    }

    /**
     * Gets query for [[Requisicao]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getRequisicao()
    {
        return $this->hasOne(Requisicao::className(), ['id' => 'requisicao_id']);
    }
}
