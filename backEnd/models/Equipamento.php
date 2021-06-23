<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "equipamento".
 *
 * @property int $id
 * @property int|null $tipo_equipamento
 * @property string|null $marca
 * @property string|null $modelo
 * @property int|null $estado
 *
 * @property Requisicao[] $requisicaos
 */
class Equipamento extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'equipamento';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['tipo_equipamento', 'estado'], 'integer'],
            [['marca', 'modelo'], 'string', 'max' => 45],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'tipo_equipamento' => 'Tipo Equipamento',
            'marca' => 'Marca',
            'modelo' => 'Modelo',
            'estado' => 'Estado',
        ];
    }

    /**
     * Gets query for [[Requisicaos]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getRequisicaos()
    {
        return $this->hasMany(Requisicao::className(), ['equipamento_id' => 'id']);
    }

    public static function findByTypeEquipament($type_equipament){
        return static::findAll(['tipo_equipamento' => $type_equipament]);
    }

}
