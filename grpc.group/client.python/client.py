import grpc
import person_pb2
import person_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = person_pb2_grpc.PersonServiceStub(channel)
        
        # Create a person
        person = person_pb2.Person(name='John Doe', age=30, sex='M', address='123 Main St')
        response = stub.CreatePerson(person_pb2.CreatePersonRequest(person=person))
        print("Created:", response.person)
        
        # Get the person by ID
        response = stub.GetPerson(person_pb2.GetPersonRequest(id=response.person.id))
        print("Retrieved:", response.person)
        
        # Update the person
        response.person.address = '456 Elm St'
        response = stub.UpdatePerson(person_pb2.UpdatePersonRequest(person=response.person))
        print("Updated:", response.person)
        
        # Delete the person
        response = stub.DeletePerson(person_pb2.DeletePersonRequest(id=response.person.id))
        print(response.message)

if __name__ == '__main__':
    run()
