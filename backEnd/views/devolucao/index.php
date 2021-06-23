<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\DevolucaoSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Devolucaos';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="devolucao-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Devolucao', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'requisicao_id',
            'data_devolucao',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
