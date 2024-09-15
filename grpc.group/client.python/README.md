### Install Dependencies
- cd client.python
- python -m venv venv
- source venv/bin/activate  # On Linux
- venv\Scripts\activate  # On Windows
- pip install -r requirements.txt
- python -m grpc_tools.protoc -I ../server.nodejs/src/models --python_out=. --grpc_python_out=. ../server.nodejs/src/models/person.proto

### Run the gRPC Client
- python client.py
