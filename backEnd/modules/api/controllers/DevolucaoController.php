<?php

namespace app\modules\api\controllers;

use yii\rest\ActiveController;
use app\models\Devolucao;
use yii\filters\Cors;
use yii\helpers\ArrayHelper;

/**
 * Utilizador controller for the `api` module
 */
class DevolucaoController extends ActiveController{

    public $modelClass = Devolucao::class;

    public function behaviors(){
        return ArrayHelper::merge([
            [
                'class' => Cors::className(),
            ],
        ], parent::behaviors());
    } 
}
?>