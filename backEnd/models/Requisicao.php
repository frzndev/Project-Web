<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "requisicao".
 *
 * @property int $id
 * @property int $estudante_id
 * @property int $equipamento_id
 * @property int|null $quantidade
 * @property string|null $data_requisicao
 * @property int|null $estado
 *
 * @property Devolucao[] $devolucaos
 * @property Equipamento $equipamento
 * @property Utilizador $estudante
 */
class Requisicao extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'requisicao';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['estudante_id', 'equipamento_id'], 'required'],
            [['estudante_id', 'equipamento_id', 'quantidade', 'estado'], 'integer'],
            [['data_requisicao'], 'safe'],
            [['equipamento_id'], 'exist', 'skipOnError' => true, 'targetClass' => Equipamento::className(), 'targetAttribute' => ['equipamento_id' => 'id']],
            [['estudante_id'], 'exist', 'skipOnError' => true, 'targetClass' => Utilizador::className(), 'targetAttribute' => ['estudante_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'estudante_id' => 'Estudante ID',
            'equipamento_id' => 'Equipamento ID',
            'quantidade' => 'Quantidade',
            'data_requisicao' => 'Data Requisicao',
            'estado' => 'Estado',
        ];
    }

    /**
     * Gets query for [[Devolucaos]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getDevolucaos()
    {
        return $this->hasMany(Devolucao::className(), ['requisicao_id' => 'id']);
    }

    /**
     * Gets query for [[Equipamento]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getEquipamento()
    {
        return $this->hasOne(Equipamento::className(), ['id' => 'equipamento_id']);
    }

    /**
     * Gets query for [[Estudante]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getEstudante()
    {
        return $this->hasOne(Utilizador::className(), ['id' => 'estudante_id']);
    }

    public static function findByIdUser($idUser){
        return static::findAll(['estudante_id' => $idUser]);
    }

}
