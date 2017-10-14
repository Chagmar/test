<footer class="container-fluid">

</footer>

<!-- Модальное окно -->

<div class="modal fade" id="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">Название модали</h4>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
            <button type="button" class="btn btn-primary">Сохранить изменения</button>
            </div>
        </div>
    </div>
</div>

<!-- Скрипты -->

<script src="https://code.jquery.com/jquery.js" type="text/javascript"></script>
<script src="js/bootstrap.js" type="text/javascript"></script>
<script src="js/fancybox/jquery.fancybox.js" type="text/javascript"></script>
<script src="js/owl.carousel.js" type="text/javascript"></script>
<script src="js/myjs.js" type="text/javascript"></script>

<script type="text/javascript">
    $('*[data-toggle=tooltip]').tooltip();
    
    $('.owl-carousel-category').owlCarousel({
        navSpeed:1500,
        dragEndSpeed:1500,
        nav:true,
        dots: false,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
</script>