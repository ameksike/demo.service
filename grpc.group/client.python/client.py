import grpc
import person_pb2
import person_pb2_grpc

import json
import os


def loadConfig():
    json_path = os.path.join(
        os.path.dirname(__file__), "..", "server.nodejs", "cfg", "config.json"
    )
    with open(json_path, "r") as file:
        data = json.load(file)
    return data


def main():
    config = loadConfig()
    protoPath = config["service"]["person"]["path"]
    packageName = config["service"]["person"]["package"]
    PersonService = config["service"]["person"]["interface"]
    uri = config["host"] + ":" + str(config["port"])

    print(config["host"] + ":" + str(config["port"]))

    with grpc.insecure_channel(uri) as channel:
        stub = person_pb2_grpc.PersonServiceStub(channel)
        
        # Create a person
        person = person_pb2.Person(name='John Doe', age=30, sex='M', address='123 Main St')
        response = stub.create(person_pb2.CreatePersonRequest(person=person))
        print("Created:", response.person)
        
        # Get the person by ID
        response = stub.select(person_pb2.GetPersonRequest(id=response.person.id))
        print("Retrieved:", response.person)
        
        # Update the person
        response.person.address = '456 Elm St'
        response = stub.update(person_pb2.UpdatePersonRequest(person=response.person))
        print("Updated:", response.person)
        
        # Delete the person
        response = stub.remove(person_pb2.DeletePersonRequest(id=response.person.id))
        print(response.message)

if __name__ == "__main__":
    main()
