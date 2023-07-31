/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/test-runtime-utils-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInsecureUser": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IInsecureUser():
    TypeOnly<old.IInsecureUser>;
declare function use_current_InterfaceDeclaration_IInsecureUser(
    use: TypeOnly<current.IInsecureUser>);
use_current_InterfaceDeclaration_IInsecureUser(
    get_old_InterfaceDeclaration_IInsecureUser());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInsecureUser": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IInsecureUser():
    TypeOnly<current.IInsecureUser>;
declare function use_old_InterfaceDeclaration_IInsecureUser(
    use: TypeOnly<old.IInsecureUser>);
use_old_InterfaceDeclaration_IInsecureUser(
    get_current_InterfaceDeclaration_IInsecureUser());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IMockContainerRuntimePendingMessage": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IMockContainerRuntimePendingMessage():
    TypeOnly<old.IMockContainerRuntimePendingMessage>;
declare function use_current_InterfaceDeclaration_IMockContainerRuntimePendingMessage(
    use: TypeOnly<current.IMockContainerRuntimePendingMessage>);
use_current_InterfaceDeclaration_IMockContainerRuntimePendingMessage(
    get_old_InterfaceDeclaration_IMockContainerRuntimePendingMessage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IMockContainerRuntimePendingMessage": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IMockContainerRuntimePendingMessage():
    TypeOnly<current.IMockContainerRuntimePendingMessage>;
declare function use_old_InterfaceDeclaration_IMockContainerRuntimePendingMessage(
    use: TypeOnly<old.IMockContainerRuntimePendingMessage>);
use_old_InterfaceDeclaration_IMockContainerRuntimePendingMessage(
    get_current_InterfaceDeclaration_IMockContainerRuntimePendingMessage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InsecureTokenProvider": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InsecureTokenProvider():
    TypeOnly<old.InsecureTokenProvider>;
declare function use_current_ClassDeclaration_InsecureTokenProvider(
    use: TypeOnly<current.InsecureTokenProvider>);
use_current_ClassDeclaration_InsecureTokenProvider(
    get_old_ClassDeclaration_InsecureTokenProvider());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InsecureTokenProvider": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InsecureTokenProvider():
    TypeOnly<current.InsecureTokenProvider>;
declare function use_old_ClassDeclaration_InsecureTokenProvider(
    use: TypeOnly<old.InsecureTokenProvider>);
use_old_ClassDeclaration_InsecureTokenProvider(
    get_current_ClassDeclaration_InsecureTokenProvider());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntime": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockContainerRuntime():
    TypeOnly<old.MockContainerRuntime>;
declare function use_current_ClassDeclaration_MockContainerRuntime(
    use: TypeOnly<current.MockContainerRuntime>);
use_current_ClassDeclaration_MockContainerRuntime(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_MockContainerRuntime());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntime": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockContainerRuntime():
    TypeOnly<current.MockContainerRuntime>;
declare function use_old_ClassDeclaration_MockContainerRuntime(
    use: TypeOnly<old.MockContainerRuntime>);
use_old_ClassDeclaration_MockContainerRuntime(
    get_current_ClassDeclaration_MockContainerRuntime());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntimeFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockContainerRuntimeFactory():
    TypeOnly<old.MockContainerRuntimeFactory>;
declare function use_current_ClassDeclaration_MockContainerRuntimeFactory(
    use: TypeOnly<current.MockContainerRuntimeFactory>);
use_current_ClassDeclaration_MockContainerRuntimeFactory(
    get_old_ClassDeclaration_MockContainerRuntimeFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntimeFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockContainerRuntimeFactory():
    TypeOnly<current.MockContainerRuntimeFactory>;
declare function use_old_ClassDeclaration_MockContainerRuntimeFactory(
    use: TypeOnly<old.MockContainerRuntimeFactory>);
use_old_ClassDeclaration_MockContainerRuntimeFactory(
    get_current_ClassDeclaration_MockContainerRuntimeFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntimeFactoryForReconnection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockContainerRuntimeFactoryForReconnection():
    TypeOnly<old.MockContainerRuntimeFactoryForReconnection>;
declare function use_current_ClassDeclaration_MockContainerRuntimeFactoryForReconnection(
    use: TypeOnly<current.MockContainerRuntimeFactoryForReconnection>);
use_current_ClassDeclaration_MockContainerRuntimeFactoryForReconnection(
    get_old_ClassDeclaration_MockContainerRuntimeFactoryForReconnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntimeFactoryForReconnection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockContainerRuntimeFactoryForReconnection():
    TypeOnly<current.MockContainerRuntimeFactoryForReconnection>;
declare function use_old_ClassDeclaration_MockContainerRuntimeFactoryForReconnection(
    use: TypeOnly<old.MockContainerRuntimeFactoryForReconnection>);
use_old_ClassDeclaration_MockContainerRuntimeFactoryForReconnection(
    get_current_ClassDeclaration_MockContainerRuntimeFactoryForReconnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntimeForReconnection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockContainerRuntimeForReconnection():
    TypeOnly<old.MockContainerRuntimeForReconnection>;
declare function use_current_ClassDeclaration_MockContainerRuntimeForReconnection(
    use: TypeOnly<current.MockContainerRuntimeForReconnection>);
use_current_ClassDeclaration_MockContainerRuntimeForReconnection(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_MockContainerRuntimeForReconnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockContainerRuntimeForReconnection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockContainerRuntimeForReconnection():
    TypeOnly<current.MockContainerRuntimeForReconnection>;
declare function use_old_ClassDeclaration_MockContainerRuntimeForReconnection(
    use: TypeOnly<old.MockContainerRuntimeForReconnection>);
use_old_ClassDeclaration_MockContainerRuntimeForReconnection(
    get_current_ClassDeclaration_MockContainerRuntimeForReconnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockDeltaConnection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockDeltaConnection():
    TypeOnly<old.MockDeltaConnection>;
declare function use_current_ClassDeclaration_MockDeltaConnection(
    use: TypeOnly<current.MockDeltaConnection>);
use_current_ClassDeclaration_MockDeltaConnection(
    get_old_ClassDeclaration_MockDeltaConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockDeltaConnection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockDeltaConnection():
    TypeOnly<current.MockDeltaConnection>;
declare function use_old_ClassDeclaration_MockDeltaConnection(
    use: TypeOnly<old.MockDeltaConnection>);
use_old_ClassDeclaration_MockDeltaConnection(
    get_current_ClassDeclaration_MockDeltaConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockDeltaManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockDeltaManager():
    TypeOnly<old.MockDeltaManager>;
declare function use_current_ClassDeclaration_MockDeltaManager(
    use: TypeOnly<current.MockDeltaManager>);
use_current_ClassDeclaration_MockDeltaManager(
    get_old_ClassDeclaration_MockDeltaManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockDeltaManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockDeltaManager():
    TypeOnly<current.MockDeltaManager>;
declare function use_old_ClassDeclaration_MockDeltaManager(
    use: TypeOnly<old.MockDeltaManager>);
use_old_ClassDeclaration_MockDeltaManager(
    get_current_ClassDeclaration_MockDeltaManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockDeltaQueue": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockDeltaQueue():
    TypeOnly<old.MockDeltaQueue<any>>;
declare function use_current_ClassDeclaration_MockDeltaQueue(
    use: TypeOnly<current.MockDeltaQueue<any>>);
use_current_ClassDeclaration_MockDeltaQueue(
    get_old_ClassDeclaration_MockDeltaQueue());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockDeltaQueue": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockDeltaQueue():
    TypeOnly<current.MockDeltaQueue<any>>;
declare function use_old_ClassDeclaration_MockDeltaQueue(
    use: TypeOnly<old.MockDeltaQueue<any>>);
use_old_ClassDeclaration_MockDeltaQueue(
    get_current_ClassDeclaration_MockDeltaQueue());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockEmptyDeltaConnection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockEmptyDeltaConnection():
    TypeOnly<old.MockEmptyDeltaConnection>;
declare function use_current_ClassDeclaration_MockEmptyDeltaConnection(
    use: TypeOnly<current.MockEmptyDeltaConnection>);
use_current_ClassDeclaration_MockEmptyDeltaConnection(
    get_old_ClassDeclaration_MockEmptyDeltaConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockEmptyDeltaConnection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockEmptyDeltaConnection():
    TypeOnly<current.MockEmptyDeltaConnection>;
declare function use_old_ClassDeclaration_MockEmptyDeltaConnection(
    use: TypeOnly<old.MockEmptyDeltaConnection>);
use_old_ClassDeclaration_MockEmptyDeltaConnection(
    get_current_ClassDeclaration_MockEmptyDeltaConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockFluidDataStoreContext": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockFluidDataStoreContext():
    TypeOnly<old.MockFluidDataStoreContext>;
declare function use_current_ClassDeclaration_MockFluidDataStoreContext(
    use: TypeOnly<current.MockFluidDataStoreContext>);
use_current_ClassDeclaration_MockFluidDataStoreContext(
    get_old_ClassDeclaration_MockFluidDataStoreContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockFluidDataStoreContext": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockFluidDataStoreContext():
    TypeOnly<current.MockFluidDataStoreContext>;
declare function use_old_ClassDeclaration_MockFluidDataStoreContext(
    use: TypeOnly<old.MockFluidDataStoreContext>);
use_old_ClassDeclaration_MockFluidDataStoreContext(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_MockFluidDataStoreContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockFluidDataStoreRuntime": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockFluidDataStoreRuntime():
    TypeOnly<old.MockFluidDataStoreRuntime>;
declare function use_current_ClassDeclaration_MockFluidDataStoreRuntime(
    use: TypeOnly<current.MockFluidDataStoreRuntime>);
use_current_ClassDeclaration_MockFluidDataStoreRuntime(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_MockFluidDataStoreRuntime());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockFluidDataStoreRuntime": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockFluidDataStoreRuntime():
    TypeOnly<current.MockFluidDataStoreRuntime>;
declare function use_old_ClassDeclaration_MockFluidDataStoreRuntime(
    use: TypeOnly<old.MockFluidDataStoreRuntime>);
use_old_ClassDeclaration_MockFluidDataStoreRuntime(
    get_current_ClassDeclaration_MockFluidDataStoreRuntime());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockHandle": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockHandle():
    TypeOnly<old.MockHandle<any>>;
declare function use_current_ClassDeclaration_MockHandle(
    use: TypeOnly<current.MockHandle<any>>);
use_current_ClassDeclaration_MockHandle(
    get_old_ClassDeclaration_MockHandle());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockHandle": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockHandle():
    TypeOnly<current.MockHandle<any>>;
declare function use_old_ClassDeclaration_MockHandle(
    use: TypeOnly<old.MockHandle<any>>);
use_old_ClassDeclaration_MockHandle(
    get_current_ClassDeclaration_MockHandle());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockObjectStorageService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockObjectStorageService():
    TypeOnly<old.MockObjectStorageService>;
declare function use_current_ClassDeclaration_MockObjectStorageService(
    use: TypeOnly<current.MockObjectStorageService>);
use_current_ClassDeclaration_MockObjectStorageService(
    get_old_ClassDeclaration_MockObjectStorageService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockObjectStorageService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockObjectStorageService():
    TypeOnly<current.MockObjectStorageService>;
declare function use_old_ClassDeclaration_MockObjectStorageService(
    use: TypeOnly<old.MockObjectStorageService>);
use_old_ClassDeclaration_MockObjectStorageService(
    get_current_ClassDeclaration_MockObjectStorageService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockQuorumClients": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockQuorumClients():
    TypeOnly<old.MockQuorumClients>;
declare function use_current_ClassDeclaration_MockQuorumClients(
    use: TypeOnly<current.MockQuorumClients>);
use_current_ClassDeclaration_MockQuorumClients(
    get_old_ClassDeclaration_MockQuorumClients());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockQuorumClients": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockQuorumClients():
    TypeOnly<current.MockQuorumClients>;
declare function use_old_ClassDeclaration_MockQuorumClients(
    use: TypeOnly<old.MockQuorumClients>);
use_old_ClassDeclaration_MockQuorumClients(
    get_current_ClassDeclaration_MockQuorumClients());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockSharedObjectServices": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockSharedObjectServices():
    TypeOnly<old.MockSharedObjectServices>;
declare function use_current_ClassDeclaration_MockSharedObjectServices(
    use: TypeOnly<current.MockSharedObjectServices>);
use_current_ClassDeclaration_MockSharedObjectServices(
    get_old_ClassDeclaration_MockSharedObjectServices());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockSharedObjectServices": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockSharedObjectServices():
    TypeOnly<current.MockSharedObjectServices>;
declare function use_old_ClassDeclaration_MockSharedObjectServices(
    use: TypeOnly<old.MockSharedObjectServices>);
use_old_ClassDeclaration_MockSharedObjectServices(
    get_current_ClassDeclaration_MockSharedObjectServices());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockStorage": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MockStorage():
    TypeOnly<old.MockStorage>;
declare function use_current_ClassDeclaration_MockStorage(
    use: TypeOnly<current.MockStorage>);
use_current_ClassDeclaration_MockStorage(
    get_old_ClassDeclaration_MockStorage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MockStorage": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MockStorage():
    TypeOnly<current.MockStorage>;
declare function use_old_ClassDeclaration_MockStorage(
    use: TypeOnly<old.MockStorage>);
use_old_ClassDeclaration_MockStorage(
    get_current_ClassDeclaration_MockStorage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_validateAssertionError": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_validateAssertionError():
    TypeOnly<typeof old.validateAssertionError>;
declare function use_current_FunctionDeclaration_validateAssertionError(
    use: TypeOnly<typeof current.validateAssertionError>);
use_current_FunctionDeclaration_validateAssertionError(
    get_old_FunctionDeclaration_validateAssertionError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_validateAssertionError": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_validateAssertionError():
    TypeOnly<typeof current.validateAssertionError>;
declare function use_old_FunctionDeclaration_validateAssertionError(
    use: TypeOnly<typeof old.validateAssertionError>);
use_old_FunctionDeclaration_validateAssertionError(
    get_current_FunctionDeclaration_validateAssertionError());
