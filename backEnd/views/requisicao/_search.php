<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\RequisicaoSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="requisicao-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'estudante_id') ?>

    <?= $form->field($model, 'equipamento_id') ?>

    <?= $form->field($model, 'quantidade') ?>

    <?= $form->field($model, 'data_requisicao') ?>

    <?php // echo $form->field($model, 'estado') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
