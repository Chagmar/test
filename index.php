<!DOCTYPE html>
<html lang="ru">

<?php include 'head.php'; ?>

    <body>
        
        <?php include 'top-panel.php'; ?>
        
        <div class="container">
            
            <div class="row">
                <div class="h1">Заголовок H1</div>
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#1" data-toggle="tab">Первая</a>
                    </li>
                    <li>
                        <a href="#2" data-toggle="tab">Вторая</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="1">Тело первой вкладки</div>
                    <div class="tab-pane" id="2">Тело второй вкладки</div>
                </div>
            </div>
            
        </div>
        
        <?php include 'footer.php'; ?>
        
    </body>

</html>