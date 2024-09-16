### Install 
- install PHP
- install Composer
- install Dependencies
    - Copy the downloaded grpc.dll file to the ext directory of your PHP installation. For example: `C:\php\ext\`
    - Add the following line to your `php.ini` file to enable the gRPC extension: `extension=grpc`
    - Restart your web server or PHP service to apply the changes.
    - RUN: `composer require "grpc/grpc:^1.38" "google/protobuf"`
- Compile the `.proto` File
    - Download the Windows [protoc executable](https://github.com/protocolbuffers/protobuf/releases) for your system, extract it, and add the bin directory to your system's PATH variable.
    - Install the PHP gRPC Plugin: Run this command to install the gRPC plugin for protoc:
        - RUN: `composer require grpc/protoc-gen-php-grpc`
    - Generate PHP gRPC Code: Open a terminal or PowerShell, and navigate to the directory containing your .proto file. Run the following command:
        - RUN: `protoc --php_out=./generated --grpc_out=./generated --plugin=protoc-gen-grpc=vendor/bin/protoc-gen-php-grpc.bat ./path/to/your.proto`
    - This command will generate the necessary PHP files in the ./generated directory. You will get two types of generated files:
        - `PersonServiceGrpcClient.php`: The gRPC client stub.
        - `Person.php`: PHP class for the Person message.

### Run the gRPC Client
- php src/client.php

### References
- [PHP Binaries and sources Releases](https://windows.php.net/download#php-8.3)
- [Download Composer](https://getcomposer.org/download/)
- [Download PHP gRPC library](https://pecl.php.net/package/grpc)