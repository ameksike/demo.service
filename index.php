<?php
    function listDirectory($dir) {
        $exclude = ['..', '.', '.git', 'index.php'];
        $list = scandir($dir);
        $lsou = "<ul>";
        foreach($list as $i){
            if(!empty($i)  &&  !in_array($i, $exclude)){
                $lsou .= '<li> <a href="'.$i.'/" > '.$i.' </a>  </li>' ;
            }
        }
        $lsou .= "</ul>";
        return   $lsou;
    }
?> 

<h3> List of directories: with sever on <<   php -S <?php echo $_SERVER['HTTP_HOST']; ?>   >> </h3> 
<?php echo listDirectory(__DIR__); ?> 