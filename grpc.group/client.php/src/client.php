<?php
require 'vendor/autoload.php';
require 'generated/PersonServiceGrpcClient.php';
require 'generated/Person.php';

use Grpc\ChannelCredentials;
use PersonService\PersonServiceClient;
use PersonService\Person;

// Create a client
$client = new PersonServiceClient('localhost:50051', [
    'credentials' => ChannelCredentials::createInsecure(),
]);

// Create a Person request
$person = new Person();
$person->setId("1");
$person->setName("John Doe");
$person->setAge(30);
$person->setSex("M");
$person->setAddress("123 Main St");

$request = new CreatePersonRequest();
$request->setPerson($person);

// Call the 'create' method
list($response, $status) = $client->Create($request)->wait();

if ($status->code === \Grpc\STATUS_OK) {
    echo "Person created successfully: " . $response->getPerson()->getName();
} else {
    echo "Error: " . $status->details;
}
