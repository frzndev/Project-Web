<?php

namespace app\modules\api\controllers;

use yii\rest\ActiveController;
use app\models\Equipamento;
use yii\filters\Cors;
use yii\helpers\ArrayHelper;

/**
 * Utilizador controller for the `api` module
 */
class EquipamentoController extends ActiveController{

    public $modelClass = Equipamento::class;

    public function behaviors(){
        return ArrayHelper::merge([
            [
                'class' => Cors::className(),
            ],
        ], parent::behaviors());
    } 

    public function actionRegister(){
        $request = $this->request->getBodyParams();

        $response['equipamento'] = null;

        $model = new Equipamento();
        $model->tipo_equipamento = $request['tipoDeEquipamento'];
        $model->marca = $request['marca'];
        $model->modelo = $request['modelo'];
        $model->estado = $request['estado'];
        $model->save();

        $response['equipamento'] = $model;

        return $response;
    }

    public function actionFilter(){
        $request = $this->request->getBodyParams();

        $response = Equipamento::findByTypeEquipament($request['tipo_equipamento']);
        
        return $response;
    }

    public function actionRemove(){
        $request = $this->request->getBodyParams();

        $response = Equipamento::Remove($request['idEquipamento']);

        return $response;
    }

}
?>