<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "utilizador".
 *
 * @property string $login
 * @property string $password
 * @property string $nome
 * @property string $email
 * @property string $telefone
 * @property int $escola
 * @property int $tipodeutilizador
 *
 * @property Mensagem[] $mensagems
 * @property Requisicao[] $requisicaos
 */
class Utilizador extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'utilizador';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['login', 'password', 'nome', 'email', 'telefone', 'escola', 'tipodeutilizador'], 'required'],
            [['id', 'escola', 'tipodeutilizador'], 'integer'],
            [['login', 'password', 'nome', 'email', 'telefone'], 'string', 'max' => 45],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'login' => 'Login',
            'password' => 'Password',
            'nome' => 'Nome',
            'email' => 'Email',
            'telefone' => 'Telefone',
            'escola' => 'Escola',
            'tipodeutilizador' => 'Tipodeutilizador',
        ];
    }

    /**
     * Gets query for [[Mensagems]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMensagems()
    {
        return $this->hasMany(Mensagem::className(), ['to' => 'id']);
    }

    /**
     * Gets query for [[Requisicaos]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getRequisicaos()
    {
        return $this->hasMany(Requisicao::className(), ['estudante_id' => 'id']);
    }

    public static function Login($login, $password){
        $user = static::findByLogin($login);

        if($user['login'] == $login && $user['password'] == $password){
            return $user;
        }
        return false;
    }

    public static function findByEmail($email){
        return static::findOne(['email' => $email]);
    }

    public static function findByLogin($login){
        return static::findOne(['login' => $login]);
    }

    public static function findByTypeUser($type_user){
        return static::findAll(['tipodeutilizador' => $type_user]);
    }

    public static function findById($id){
        return static::findOne(['id' => $id]);
    }

    public static function Remove($id){
        if (($model = static::findOne(['id' => $id])) !== null) {
            $model->delete();
            return $model;
        }
    }
}
