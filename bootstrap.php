<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'hfefuxqtvetjfq',
'password' => 'b5f5ee98a768f21d17433e289edaadfc70ed1e2934d910554cea2cb1ea928b47',
'dbname' => 'd8jrr50unmfhsl',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
