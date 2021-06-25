<?php

namespace app\modules\api\controllers;

use yii\rest\ActiveController;
use app\models\Requisicao;
use yii\filters\Cors;
use yii\helpers\ArrayHelper;

/**
 * Requisicao controller for the `api` module
 */
class RequisicaoController extends ActiveController{

    public $modelClass = Requisicao::class;

    public function behaviors(){
        return ArrayHelper::merge([
            [
                'class' => Cors::className(),
            ],
        ], parent::behaviors());
    }

    public function actionRegister(){
        $request = $this->request->getBodyParams();

        $response['requisicao'] = null;

        $model = new Requisicao();
        $model->estudante_id = $request['idUser'];
        $model->equipamento_id = $request['idEquipamento'];
        $model->quantidade = $request['quantidade'];
        $model->data_requisicao = $request['dataRequisicao'];
        $model->estado = $request['estado'];
        $model->save();

        $response['requisicao'] = $model;

        return $response;
    }

    public function actionFilter(){
        $request = $this->request->getBodyParams();

        $response = Requisicao::findByIdUser($request['idUser']);

        return $response;

    }

}
?>