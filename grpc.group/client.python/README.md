### Install Dependencies
- cd client.python
- python -m venv venv
- source venv/bin/activate  # On Linux
- venv\Scripts\activate  # On Windows
- pip install -r requirements.txt

### Imports 
- A compilation process is required that generates files such as `person_pb2.py` and `person_pb2_grpc.py`

### Build interfaces
- python -m grpc_tools.protoc -I../server.nodejs/src/models --python_out=. --grpc_python_out=. ../server.nodejs/src/models/person.proto

### Run the gRPC Client
- python client.py

### References
- [Quick start](https://grpc.io/docs/languages/python/quickstart/)
