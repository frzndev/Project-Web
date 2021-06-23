<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Devolucao */

$this->title = 'Create Devolucao';
$this->params['breadcrumbs'][] = ['label' => 'Devolucaos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="devolucao-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
