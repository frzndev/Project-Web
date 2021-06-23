<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Requisicao */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="requisicao-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'estudante_id')->textInput() ?>

    <?= $form->field($model, 'equipamento_id')->textInput() ?>

    <?= $form->field($model, 'quantidade')->textInput() ?>

    <?= $form->field($model, 'data_requisicao')->textInput() ?>

    <?= $form->field($model, 'estado')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
