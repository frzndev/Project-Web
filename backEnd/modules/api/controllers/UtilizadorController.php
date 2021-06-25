<?php

namespace app\modules\api\controllers;

use yii\rest\ActiveController;
use app\models\Utilizador;
use yii\filters\Cors;
use yii\helpers\ArrayHelper;

/**
 * Utilizador controller for the `api` module
 */
class UtilizadorController extends ActiveController{

    public $modelClass =  Utilizador::class;

    public function behaviors(){
        return ArrayHelper::merge([
            [
                'class' => Cors::className(),
            ],
        ], parent::behaviors());
    }

    public function actionLogin(){
        $request = $this->request->getBodyParams();
        $response['user'] = null;

        if(Utilizador::findByLogin($request['login']) && $user = Utilizador::Login($request['login'], $request['password'])){
            $response['user'] = $user;
        }
        
        return $response;
    }

    public function actionRegister(){
        $request = $this->request->getBodyParams();
        
        $response['user'] = null;
        $model = new Utilizador();

        $model->login = $request['login'];
        $model->password = $request['password'];
        $model->nome = $request['nome'];
        $model->email = $request['email'];
        $model->telefone = $request['telefone'];
        $model->escola = $request['escola'];
        $model->tipodeutilizador = $request['tipodeutilizador'];

        if((!Utilizador::findByLogin($request['login']) && !Utilizador::findByEmail($request['email'])) && $model->save()){
            $response['user'] = $model;
        }
        
        return $response;
    }

    public function actionFilter(){
        $request = $this->request->getBodyParams();

        $response = Utilizador::findByTypeUser($request['tipoDeUtilizador']);
        
        return $response;
    }

    public function actionId(){
        $request = $this->request->getBodyParams();

        $response = Utilizador::findById($request['idUser']);
        
        return $response;
    }

    public function actionRemove(){
        $request = $this->request->getBodyParams();

        $response = Utilizador::Remove($request['idUser']);

        return $response;
    }

}
?>