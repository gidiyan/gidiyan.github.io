<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Discount</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/footer.css" rel="stylesheet">
    <link href="css/base.css" rel="stylesheet">
    <link href="css/effect.css" rel="stylesheet">
    <link href="css/modal.css" rel="stylesheet">
    <link href="css/form.css" rel="stylesheet">
    <link href="css/backup.css" rel="stylesheet">
    <link href="css/animation.css" rel="stylesheet">
    <link href="css/sidebar.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">
    <link rel="icon" href="images/kindpng_625081.png">


</head>
<body>
<div class="container">
    <div class="over"></div>
    <!--main header page-->
    <nav>
        <div class="navbar-center">
            <!-- navigation -->
            <div class="sm-nav md-nav tb-nav">
                <ul class="sm-brand md-brand tb-brand">
                    <li><img class="img-fluid" alt="" src="images/kindpng_625081.png"></li></ul>
                <input id="hamburger" type="checkbox" class="trig_menu">
                <ul class="sm-links md-links tb-links">
                    <li><a href="/">Main</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/blog">News</a></li>
                    <li><a href="/contact">Contacts</a></li>
                </ul>

                <ul class="sm-tools md-tools tb-tools">
                    <li><a href="#"><i class="fas fa-dolly-flatbed"></i>(<small id="cart" class="count-items-in-cart"></small>)</a></li>
                    <li><a href="#"><i class="far fa-heart"></i>(<small class="like_me"></small>)</a></li>
                    <li><a href="#login"><i class="fas fa-user-alt"></i></a></li>
                </ul>
                <label for="hamburger" class="nav-ham"><i class="fa-bars fa"></i></label>
            </div>
        </div>
    </nav>
    <!-- cart  -->
    <aside class="sidebar">
        <div class="sidebar-header">
            <button class="close-btn"><i class="fas fa-times"></i></button>
            <h5 class="logo">Your shopping cart</h5>
        </div>
        <div class="cart-items">
        </div>
        <div class="cart-footer">
            <h3>Your total:$<span class="cart-total"></span></h3>
            <button class="clear-cart btn-info font-size--default">Clear Cart</button>
        </div>
    </aside>
<?php
switch ($_SERVER['REQUEST_URI']) {
    case '/':
        ?>
        <!-- slider -->
        <article class="container slider">
            <div class="slides">
                <div class="overflow">
                    <div class="items">
                        <article class="slide"><img class="pic-parent pic-to-center" src="images/prod1.jpg"></article>
                        <article class="slide"><img class="pic-parent pic-to-center" src="images/prod2.jpg"></article>
                        <article class="slide"><img class="pic-parent pic-to-center" src="images/prod3.jpg"></article>
                        <article class="slide"><img class="pic-parent pic-to-center" src="images/prod4.jpg"></article>
                        <article class="slide"><img class="pic-parent pic-to-center" src="images/prod5.jpg"></article>
                    </div>

                </div>
            </div>
        </article>
        <!-- categories -->
        <!--        <div class="row"><a class="pic-center" href="#"><img src="images/banner.gif" width="50%"> </a></div>-->
        <section>
            <div class="categories">
                <header class="titles">
                    <h2>CATEGORIES</h2>
                </header>
                <div class="row categoriesShow">
                </div>
            </div>
        </section>
        <!-- showcase -->
            <div class="products">
                <section>
                    <header class="titles">
                        <h2>TOP PRODUCTS</h2>
                    </header>
                    <div id="prod" class="row showcase">
                    </div>
                </section>
            </div>
            <div class="fr">
                <div class="sm-foot md-foot or-3">
                    <p>&copy;2020 Dog discount</p>
                </div>
                <ul class="sm-foot md-foot tb-foot">
                    <li><b>Follow:</b></li>
                    <li><a href="https://twitter.com/dog_discount" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
                    <li><a href="https://www.instagram.com/dog_discount/" target="_blank"><i class="fab fa-instagram-square"></i></a></li>
                    <li><a href="https://www.facebook.com/dog_discount/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.tiktok.com/@dogdiscount.ea?lang=en" target="_blank"><i class="fab fa-tiktok"></i></a></li>
                </ul>
                <ul class="sm-foot md-foot tb-foot">
                    <li><b>Contact:</b></li>
                    <li><a href="mailto:test@test.com" target="_blank"><i class="far fa-envelope"></i></a></li>
                    <li><a href="tel:+123456789123" target="_blank"><i class="fas fa-mobile-alt"></i></a></li>
                    <li><a href="viber://chat/?number=+123456789123&lang=en" target="_blank"><i class="fab fa-viber"></i></a></li>
                    <li><a href="https://wa.me/123456789123?lang=ru&text=I%20have%20a%20question" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                </ul>
            </div>
        <?php
        break;
    case '/blog':
        ?>
        <div class="text_">

        <h2>TEST</h2>
        By and by, when we got up, we turned over the truck the gang had stole off of the wreck, and found boots, and blankets, and clothes, and all sorts of other things, and a lot of books, and a spyglass, and three boxes of seegars. We hadn't ever been this rich before in neither of our lives. The seegars was prime. We laid off all the afternoon in the woods talking, and me reading the books, and having a general good time. I told Jim all about what happened inside the wreck and at the ferryboat, and I said these kinds of things was adventures; but he said he didn't want no more adventures. He said that when I went in the texas and he crawled back to get on the raft and found her gone he nearly died, because he judged it was all up with HIM anyway it could be fixed; for if he didn't get saved he would get drownded; and if he did get saved, whoever saved him would send him back home so as to get the reward, and then Miss Watson would sell him South, sure. Well, he was right; he was most always right; he had an uncommon level head for a nigger.

        I read considerable to Jim about kings and dukes and earls and such, and how gaudy they dressed, and how much style they put on, and called each other your majesty, and your grace, and your lordship, and so on, 'stead of mister; and Jim's eyes bugged out, and he was interested. He says:

        "I didn' know dey was so many un um. I hain't hearn 'bout none un um, skasely, but ole King Sollermun, onless you counts dem kings dat's in a pack er k'yards. How much do a king git?"

        "Get?" I says; "why, they get a thousand dollars a month if they want it; they can have just as much as they want; everything belongs to them."

        Проснувшись, мы пересмотрели все добро, награбленное шайкой на разбитом пароходе; там оказались и сапоги, и одеяла, и платья, и всякие другие вещи, а еще много книг, подзорная труба и три ящика сигар. Такими богачами мы с Джимом еще никогда в жизни не были. Сигары оказались первый сорт. До вечера мы валялись в лесу и разговаривали; я читал книжки; и вообще мы недурно провели время. Я рассказал Джиму обо всем, что произошло на пароходе и на пароме, и сообщил ему кстати, что это и называется приключением; а он ответил, что не желает больше никаких приключений. Джим рассказал, что в ту минуту, когда я залез в рубку, а он прокрался обратно к плоту и увидел, что плота больше нет, он чуть не умер со страха: так и решил, что ему теперь крышка, чем бы дело ни кончилось, потому что если его не спасут, так он утонет; а если кто нибудь его спасет, так отвезет домой, чтобы получить за него награду, а там мисс Уотсон, наверно, продаст его на Юг. Что ж, он был прав; он почти всегда бывал прав, голова у него работала здорово, - для негра, конечно.
    </div>
    <?php
        break;
    case '/shop':?>
        <!--     slider-->
    <article class="carusel">
        <input type="radio" class="activator" name="carusel" id="A" checked="checked">
        <input type="radio" class="activator" name="carusel" id="B">
        <input type="radio" class="activator" name="carusel" id="C">
        <input type="radio" class="activator" name="carusel" id="D">
        <input type="radio" class="activator" name="carusel" id="E">
        <div class="controls">
            <label for="E" class="control backward"></label>
            <label for="B" class="control forward"></label>
        </div>
        <div class="controls">
            <label for="A" class="control backward"></label>
            <label for="C" class="control forward"></label>
        </div>
        <div class="controls">
            <label for="B" class="control backward"></label>
            <label for="D" class="control forward"></label>
        </div>
        <div class="controls">
            <label for="C" class="control backward"></label>
            <label for="E" class="control forward"></label>
        </div>
        <div class="controls">
            <label for="D" class="control backward"></label>
            <label for="A" class="control forward"></label>
        </div>
        <div class="slides">
            <div class="overflow">
                <div class="items">
                    <article class="slide"><img class="pic-to-center pic-parent" src="images/prod1.jpg"></article>
                    <article class="slide"><img class="pic-to-center pic-parent" src="images/prod2.jpg"></article>
                    <article class="slide"><img class="pic-to-center pic-parent" src="images/prod3.jpg"></article>
                    <article class="slide"><img class="pic-to-center pic-parent" src="images/prod4.jpg"></article>
                    <article class="slide"><img class="pic-to-center pic-parent" src="images/prod5.jpg"></article>
                </div>
                <div class="indicators">
                    <label for="A" class="indicator"></label>
                    <label for="B" class="indicator"></label>
                    <label for="C" class="indicator"></label>
                    <label for="D" class="indicator"></label>
                    <label for="E" class="indicator"></label>
                </div>
            </div>
        </div>
    </article>
        <!-- showcase -->
    <div class="products">
        <section>
            <div class="row">
            <!--    side bar-->
                <div class="tb-4  sm-categories categories">
                <h5 class="large text_uppercase mt-3">Categories</h5>
                <div class="py2 px-4 mb-3 mt-3"><strong class="medium text_uppercase"></strong>
                 <ul class="medium categories-list">
<!--                <li class="incol mb-2 mt-3"><a class="reset_anchor" href="#">Kibble/Dry</a></li>-->
<!--                <li class="incol mb-2"><a class="reset_anchor" href="#">Canned</a></li>-->
<!--                <li class="incol mb-2"><a class="reset_anchor" href="#">Semi-Moist</a></li>-->

                </ul>
                     </div>
<!--                <div class="py2 px-4 mb-3 mt-3"><strong class="medium text_uppercase">Premium</strong>-->
<!--            <ul class="medium">-->
<!--                <li class="incol mb-2 mt-3"><a class="reset_anchor" href="#">Kibble/Dry</a></li>-->
<!--                <li class="incol mb-2"><a class="reset_anchor" href="#">Canned</a></li>-->
<!--                <li class="incol mb-2"><a class="reset_anchor" href="#">Semi-Moist</a></li>-->
<!--            </ul>-->
<!--                </div>-->
                </div>

        <!--    main section-->
            <div class="tb-9">
        <div class="row mb-3 align-items-center">
            <div class="tb-2 mb-2">
                <p class="mt-3">Showing 1-8 of 100 results</p>
            </div>
            <div class="tb-2 mb-2">
                <ul>
                    <li>
                    <a class="reset-anchor"><i class="fas fa-th-large"></i></a>
                    </li>
                    <li>
                        <a class="reset-anchor"><i class="fas fa-th"></i></a>
                    </li>
                    <li class="reset-anchor">
                        <select name="sorting" id=""
                                class="selectpicker ml-auto"
                                data-width="200"
                                data-styly="bs-select-form-control"
                                data-title="Default sorting">
                            <option value="default">Default sorting</option>
                            <option value="popularity">Popularity</option>
                            <option value="low-high">Low To High</option>
                            <option value="high-low">High To Low</option>
                    </select></li>
                </ul>
            </div>
        </div>
                <div id="prod" class="row showcase">
                </div>
    </div>
</div>
        </section>
    </div>
    <?php
        break;
    case '/contact':
      ?>
    <div class="row">
        <div class="tb-3">
            <form class="text-center border p-5 m-auto" action="">
                <h4 class="px-4 ">Contact us</h4>
                <div class="mb-1">
                    <label for="username"></label><input class="form-control text-center" type="text" name="username" value="" id="username" placeholder="Enter Your Name"></div>
                <div class="mb-1">
                    <label for="email"></label><input class="form-control text-center" type="email" name="email" value="" id="email" placeholder="Enter Your Email">
                </div>
                <div class="form-control form-radio mb-1">
                    <label>
                        <input name="gender" type="radio" ><strong class="text-col-5">Mr.</strong>
                    </label>
                    <label>
                        <input name="gender" type="radio" ><strong class="text-col-5">Ms.</strong>
                    </label>
                </div>
                <label class="text-col-5 text_uppercase" for="">Subject:</label>
                <select name="subject" class="form-select" id="">
                    <option class="text-uppercase" value="" disabled>Choose options</option>
                    <option  class="text-uppercase" value="1">Feedback</option>
                    <option  class="text-uppercase" value="2">Report a bug</option>
                    <option  class="text-uppercase" value="3">Feater request</option>
                </select>
                <div class="form-group">
                    <textarea name="message" class="form-control bg-white" id="текс" cols="20" rows="10"></textarea>
                </div>
                <div class="form-checkbox mb-1">
                    <label>
                        <input type="checkbox">
                    </label>Send me a copy of this message
                </div>
                <button type="submit" class="btn btn-dark btn-block">Send</button>
            </form>
        </div>
        <div class="tb-3"><h2>~ here could be your advertise ~</h2></div>
        <div class="tb-3 my-2">
            <h4 class="px-4 ">Adress</h4>
            <p class="border-dark">
                Location	Mountain View, California, United States</br>
                Coordinates	37.422°N 122.084°WCoordinates: 37.422°N 122.084°W</br>
                Address	1600 Amphitheatre Parkway</br>
                Mountain View, CA 94043</p>
        </div>
    </div>
    <?php
        ?>
        <form method="post" action="<?php echo $_SERVER['REQUEST_URI'];?>"><?php echo'
        <label>Name:</label>
        <input name="username">
        <input type="submit">
        </form>';
        break;
    default:
        echo "<h1>404 Not Found</h1>";
        break;
}

?>
 <div id="login" class="modal">
                <div class="dialog">
                    <a href="#close" class="close">X</a>
                    <form class="text-center border p-5 m-auto" action="">
                        <h4 class="m-auto">Sign In</h4>
                        <div class="mb-1">
                            <input class="form-control" type="email" name="email" value=""  id="email_login" placeholder="Enter Your Email"></label>
                        </div>
                        <div class="mb-1">
                            <input class="form-control" type="password" name="username" id="password_login" value=""  placeholder="Enter Your Password"></label></div>
                        <div class="form-checkbox mb-1">
                            <label class="text-col-4">
                                <input class="form-control" type="checkbox">Remeber Me
                            </label>
                        </div>


                        <button type="submit" class="btn btn-dark btn-block">Login</button>
                        <p class="mb-1">
                            <a class="text-col-1" href="forgot.html">Forgot password</a>
                        </p>
                        <p class="p-1">
                            Not a memer <a class="text-col-1" href="#register">Register</a>
                        </p>
                    </form>
                </div>
            </div>
 <div id="register" class="modal">
                <div class="dialog">
                    <a href="#close" class="close">X</a>
                    <form class="text-center border p-5" action="">
                        <h4 class="h4 mb-2 m-auto">Sign Up</h4>
                        <div class="row mb-2 m-auto">
                            <div class="tb-2">
                                <label>
                                    <input class="form-control" type="text" name="First Name" value="" placeholder="Enter Your First Name">
                                </label>
                            </div>
                            <div class="tb-2">
                                <label>
                                    <input class="form-control" type="text" name="Last Name" value="" placeholder="Enter Your Last Name">
                                </label>
                            </div>
                        </div>
                        <div class="row tb-1 m-auto">
                            <input class="form-control" type="email" name="email" value=""  id="email_register" placeholder="Enter Your Email">
                        </div>
                        <div class="row tb-1  m-auto">
                            </label><input class="form-control text-center" type="password" name="username" value="" id="username_register" placeholder="Enter Your Password">
                            <input class="form-control text-center" type="password" name="username" value=""  id="password_register" placeholder="Confirm Your Password">
                        </div>

                        <button type="submit" class="btn btn-dark btn-block">Resgister</button>
                        <p class="p-1">
                            Already a member? <a class="text-col-1 "href="#login">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
</div>
<template id="cartItem">
    <div class="cart-item">
        <div class="picture product-img">
            <img src="images/prod3.jpg" alt="name" class="img-fluid w-100">
        </div>
        <div class="product_name p-auto">Product name</div>
        <div class="remove-btn text-right">
            <a class="reset-anchor m-auto" href="#">
                <i class="fas fa-trash-alt"></i>
            </a>
        </div>
        <div class="quantity">
            <div class="border d-flex justify-content-around mx-auto">
                <i class="fas fa-caret-left inc-dec-btn"></i>
                <span class="border-1 p-1 amount">1</span>
                <i class="fas fa-caret-right inc-dec-btn"></i>
            </div>
        </div>
        <div class="prices">
            <span class="price">$<span class="product_price"></span></span>
            <span class="subtotal">$<span class="product-subtotal"></span></span>
        </div>
    </div>
</template>
<script src="js/app.js"></script>
</body>
</html>