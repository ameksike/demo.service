import grpc
import person_pb2 as srvPersonNs
import person_pb2_grpc as srvPersonPk

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
    uri = (
        ("localhost" if config["host"] == "0.0.0.0" else config["host"])
        + ":"
        + str(config["port"])
    )

    with grpc.insecure_channel(uri) as channel:
        stub = srvPersonPk.PersonServiceStub(channel)

        # Create a person
        person = srvPersonNs.Person(
            name="John Doe", age=30, sex="M", address="123 Main St"
        )
        response = stub.create(srvPersonNs.CreatePersonRequest(person=person))

        # Get the person by ID
        response = stub.select(srvPersonNs.GetPersonRequest(id=response.person.id))
        print("Retrieved:", response.person)

        # Update the person
        response.person.address = "456 Elm St"
        response = stub.update(srvPersonNs.UpdatePersonRequest(person=response.person))
        print("Updated:", response.person)

        # Delete the person
        response = stub.remove(srvPersonNs.DeletePersonRequest(id=response.person.id))
        print(response.message)


if __name__ == "__main__":
    main()
