# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

import person_pb2 as person__pb2

GRPC_GENERATED_VERSION = '1.66.1'
GRPC_VERSION = grpc.__version__
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    raise RuntimeError(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in person_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class PersonServiceStub(object):
    """The PersonService with CRUD operations
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.create = channel.unary_unary(
                '/personservice.PersonService/create',
                request_serializer=person__pb2.CreatePersonRequest.SerializeToString,
                response_deserializer=person__pb2.CreatePersonResponse.FromString,
                _registered_method=True)
        self.select = channel.unary_unary(
                '/personservice.PersonService/select',
                request_serializer=person__pb2.GetPersonRequest.SerializeToString,
                response_deserializer=person__pb2.GetPersonResponse.FromString,
                _registered_method=True)
        self.update = channel.unary_unary(
                '/personservice.PersonService/update',
                request_serializer=person__pb2.UpdatePersonRequest.SerializeToString,
                response_deserializer=person__pb2.UpdatePersonResponse.FromString,
                _registered_method=True)
        self.remove = channel.unary_unary(
                '/personservice.PersonService/remove',
                request_serializer=person__pb2.DeletePersonRequest.SerializeToString,
                response_deserializer=person__pb2.DeletePersonResponse.FromString,
                _registered_method=True)


class PersonServiceServicer(object):
    """The PersonService with CRUD operations
    """

    def create(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def select(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def update(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def remove(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PersonServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'create': grpc.unary_unary_rpc_method_handler(
                    servicer.create,
                    request_deserializer=person__pb2.CreatePersonRequest.FromString,
                    response_serializer=person__pb2.CreatePersonResponse.SerializeToString,
            ),
            'select': grpc.unary_unary_rpc_method_handler(
                    servicer.select,
                    request_deserializer=person__pb2.GetPersonRequest.FromString,
                    response_serializer=person__pb2.GetPersonResponse.SerializeToString,
            ),
            'update': grpc.unary_unary_rpc_method_handler(
                    servicer.update,
                    request_deserializer=person__pb2.UpdatePersonRequest.FromString,
                    response_serializer=person__pb2.UpdatePersonResponse.SerializeToString,
            ),
            'remove': grpc.unary_unary_rpc_method_handler(
                    servicer.remove,
                    request_deserializer=person__pb2.DeletePersonRequest.FromString,
                    response_serializer=person__pb2.DeletePersonResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'personservice.PersonService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('personservice.PersonService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class PersonService(object):
    """The PersonService with CRUD operations
    """

    @staticmethod
    def create(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/personservice.PersonService/create',
            person__pb2.CreatePersonRequest.SerializeToString,
            person__pb2.CreatePersonResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def select(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/personservice.PersonService/select',
            person__pb2.GetPersonRequest.SerializeToString,
            person__pb2.GetPersonResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def update(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/personservice.PersonService/update',
            person__pb2.UpdatePersonRequest.SerializeToString,
            person__pb2.UpdatePersonResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def remove(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/personservice.PersonService/remove',
            person__pb2.DeletePersonRequest.SerializeToString,
            person__pb2.DeletePersonResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
