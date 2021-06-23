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

    public $modelClass =  Requisicao::class;

    public function behaviors(){
        return ArrayHelper::merge([
            [
                'class' => Cors::className(),
            ],
        ], parent::behaviors());
    } 
}
?>