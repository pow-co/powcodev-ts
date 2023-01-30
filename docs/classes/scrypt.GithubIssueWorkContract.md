[powcodev](../README.md) / [scrypt](../modules/scrypt.md) / GithubIssueWorkContract

# Class: GithubIssueWorkContract

[scrypt](../modules/scrypt.md).GithubIssueWorkContract

## Hierarchy

- `SmartContract`

  ↳ **`GithubIssueWorkContract`**

## Table of contents

### Constructors

- [constructor](scrypt.GithubIssueWorkContract.md#constructor)

### Properties

- [\_provider](scrypt.GithubIssueWorkContract.md#_provider)
- [\_signer](scrypt.GithubIssueWorkContract.md#_signer)
- [arbiterPubkey](scrypt.GithubIssueWorkContract.md#arbiterpubkey)
- [contracteePubkey](scrypt.GithubIssueWorkContract.md#contracteepubkey)
- [contractorPubkey](scrypt.GithubIssueWorkContract.md#contractorpubkey)
- [ctx](scrypt.GithubIssueWorkContract.md#ctx)
- [githubIssueId](scrypt.GithubIssueWorkContract.md#githubissueid)
- [githubOrg](scrypt.GithubIssueWorkContract.md#githuborg)
- [githubRepo](scrypt.GithubIssueWorkContract.md#githubrepo)
- [platformPubkey](scrypt.GithubIssueWorkContract.md#platformpubkey)

### Accessors

- [codePart](scrypt.GithubIssueWorkContract.md#codepart)
- [dataPart](scrypt.GithubIssueWorkContract.md#datapart)
- [debug](scrypt.GithubIssueWorkContract.md#debug)
- [lockTo](scrypt.GithubIssueWorkContract.md#lockto)
- [lockingScript](scrypt.GithubIssueWorkContract.md#lockingscript)
- [provider](scrypt.GithubIssueWorkContract.md#provider)
- [signer](scrypt.GithubIssueWorkContract.md#signer)
- [unlockFrom](scrypt.GithubIssueWorkContract.md#unlockfrom)

### Other Methods

- [buildDeployTransaction](scrypt.GithubIssueWorkContract.md#builddeploytransaction)
- [buildStateOutput](scrypt.GithubIssueWorkContract.md#buildstateoutput)
- [checkPreimage](scrypt.GithubIssueWorkContract.md#checkpreimage)
- [checkPreimageAdvanced](scrypt.GithubIssueWorkContract.md#checkpreimageadvanced)
- [checkPreimageSigHashType](scrypt.GithubIssueWorkContract.md#checkpreimagesighashtype)
- [clone](scrypt.GithubIssueWorkContract.md#clone)
- [connect](scrypt.GithubIssueWorkContract.md#connect)
- [deploy](scrypt.GithubIssueWorkContract.md#deploy)
- [genLaunchConfig](scrypt.GithubIssueWorkContract.md#genlaunchconfig)
- [getCtxMethods](scrypt.GithubIssueWorkContract.md#getctxmethods)
- [getStateScript](scrypt.GithubIssueWorkContract.md#getstatescript)
- [getUnlockingScript](scrypt.GithubIssueWorkContract.md#getunlockingscript)
- [markAsGenesis](scrypt.GithubIssueWorkContract.md#markasgenesis)
- [next](scrypt.GithubIssueWorkContract.md#next)
- [setDataPartInASM](scrypt.GithubIssueWorkContract.md#setdatapartinasm)
- [setDataPartInHex](scrypt.GithubIssueWorkContract.md#setdatapartinhex)
- [updateState](scrypt.GithubIssueWorkContract.md#updatestate)
- [updateStateSigHashType](scrypt.GithubIssueWorkContract.md#updatestatesighashtype)
- [verify](scrypt.GithubIssueWorkContract.md#verify)
- [compile](scrypt.GithubIssueWorkContract.md#compile)
- [findKeyIndex](scrypt.GithubIssueWorkContract.md#findkeyindex)
- [loadArtifact](scrypt.GithubIssueWorkContract.md#loadartifact)

### Signature Verification Methods

- [checkMultiSig](scrypt.GithubIssueWorkContract.md#checkmultisig)
- [checkSig](scrypt.GithubIssueWorkContract.md#checksig)

## Constructors

### constructor

• **new GithubIssueWorkContract**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `arbiterPubkey` | `Ripemd160` |
| › `contracteePubkey` | `Ripemd160` |
| › `contractorPubkey` | `Ripemd160` |
| › `githubIssueId` | `number` |
| › `githubOrg` | `string` |
| › `githubRepo` | `string` |
| › `platformPubkey` | `Ripemd160` |

#### Overrides

SmartContract.constructor

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:16](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L16)

## Properties

### \_provider

• `Optional` **\_provider**: `Provider`

#### Inherited from

SmartContract.\_provider

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:142

___

### \_signer

• `Optional` **\_signer**: `Signer`

#### Inherited from

SmartContract.\_signer

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:143

___

### arbiterPubkey

• `Readonly` **arbiterPubkey**: `Ripemd160`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:10](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L10)

___

### contracteePubkey

• `Readonly` **contracteePubkey**: `Ripemd160`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:9](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L9)

___

### contractorPubkey

• `Readonly` **contractorPubkey**: `Ripemd160`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:8](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L8)

___

### ctx

• `Optional` **ctx**: `ScriptContext`

#### Inherited from

SmartContract.ctx

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:90

___

### githubIssueId

• `Readonly` **githubIssueId**: `number`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:14](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L14)

___

### githubOrg

• `Readonly` **githubOrg**: `string`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:12](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L12)

___

### githubRepo

• `Readonly` **githubRepo**: `string`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:13](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L13)

___

### platformPubkey

• `Readonly` **platformPubkey**: `Ripemd160`

#### Defined in

[src/scrypt/contracts/GithubIssueWorkContract.ts:11](https://github.com/pow-co/powcodev-ts/blob/master/src/scrypt/contracts/GithubIssueWorkContract.ts#L11)

## Accessors

### codePart

• `get` **codePart**(): `string`

#### Returns

`string`

#### Inherited from

SmartContract.codePart

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:106

___

### dataPart

• `get` **dataPart**(): `undefined` \| `Script`

#### Returns

`undefined` \| `Script`

#### Inherited from

SmartContract.dataPart

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:135

___

### debug

• `get` **debug**(): `DebugFunctions`

#### Returns

`DebugFunctions`

#### Inherited from

SmartContract.debug

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:154

___

### lockTo

• `get` **lockTo**(): `undefined` \| `TxOutputRef`

#### Returns

`undefined` \| `TxOutputRef`

#### Inherited from

SmartContract.lockTo

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:140

• `set` **lockTo**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `TxOutputRef` |

#### Returns

`void`

#### Inherited from

SmartContract.lockTo

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:141

___

### lockingScript

• `get` **lockingScript**(): `Script`

#### Returns

`Script`

#### Inherited from

SmartContract.lockingScript

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:105

___

### provider

• `get` **provider**(): `undefined` \| `Provider`

#### Returns

`undefined` \| `Provider`

#### Inherited from

SmartContract.provider

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:146

___

### signer

• `get` **signer**(): `Signer`

#### Returns

`Signer`

#### Inherited from

SmartContract.signer

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:145

___

### unlockFrom

• `get` **unlockFrom**(): `undefined` \| `TxInputRef`

#### Returns

`undefined` \| `TxInputRef`

#### Inherited from

SmartContract.unlockFrom

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:139

• `set` **unlockFrom**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `TxInputRef` |

#### Returns

`void`

#### Inherited from

SmartContract.unlockFrom

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:138

## Other Methods

### buildDeployTransaction

▸ **buildDeployTransaction**(`utxos`, `amount`, `changeAddress?`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxos` | `IUnspentOutput`[] |
| `amount` | `number` |
| `changeAddress?` | `string` \| `Address` |

#### Returns

`Transaction`

#### Inherited from

SmartContract.buildDeployTransaction

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:147

___

### buildStateOutput

▸ **buildStateOutput**(`amount`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `bigint` |

#### Returns

`Bytes`

#### Inherited from

SmartContract.buildStateOutput

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:111

___

### checkPreimage

▸ **checkPreimage**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | `SigHashPreimage` |

#### Returns

`boolean`

#### Inherited from

SmartContract.checkPreimage

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:121

___

### checkPreimageAdvanced

▸ **checkPreimageAdvanced**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | `SigHashPreimage` |
| `privKey` | `PrivKey` |
| `pubKey` | `PubKey` |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `string` |
| `sigHashType` | `SigHashType` |

#### Returns

`boolean`

#### Inherited from

SmartContract.checkPreimageAdvanced

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:119

___

### checkPreimageSigHashType

▸ **checkPreimageSigHashType**(`txPreimage`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | `SigHashPreimage` |
| `sigHashType` | `SigHashType` |

#### Returns

`boolean`

#### Inherited from

SmartContract.checkPreimageSigHashType

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:120

___

### clone

▸ **clone**(): [`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)

#### Returns

[`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)

#### Inherited from

SmartContract.clone

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:107

___

### connect

▸ **connect**(`providerOrSigner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | `Provider` \| `Signer` |

#### Returns

`void`

#### Inherited from

SmartContract.connect

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:144

___

### deploy

▸ **deploy**(`amount?`, `options?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `number` |
| `options?` | `Object` |
| `options.address?` | `string` \| `Address` |
| `options.changeAddress?` | `string` \| `Address` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

SmartContract.deploy

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:148

___

### genLaunchConfig

▸ **genLaunchConfig**(`a`, `tx`, `inputIndex?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `tx` | `Transaction` |
| `inputIndex?` | `number` |

#### Returns

`string`

#### Inherited from

SmartContract.genLaunchConfig

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:103

___

### getCtxMethods

▸ **getCtxMethods**(): `string`[]

#### Returns

`string`[]

#### Inherited from

SmartContract.getCtxMethods

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:98

___

### getStateScript

▸ **getStateScript**(): `Bytes`

#### Returns

`Bytes`

#### Inherited from

SmartContract.getStateScript

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:112

___

### getUnlockingScript

▸ **getUnlockingScript**<`T`\>(`callPub`): `SamePromiseOrValue`<`T`, `Script`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `void` \| `Promise`<`void`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)) => `T` |

#### Returns

`SamePromiseOrValue`<`T`, `Script`\>

#### Inherited from

SmartContract.getUnlockingScript

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:102

___

### markAsGenesis

▸ **markAsGenesis**(): [`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)

#### Returns

[`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)

#### Inherited from

SmartContract.markAsGenesis

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:109

___

### next

▸ **next**(): [`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)

#### Returns

[`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)

#### Inherited from

SmartContract.next

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:108

___

### setDataPartInASM

▸ **setDataPartInASM**(`dataPart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Inherited from

SmartContract.setDataPartInASM

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:133

___

### setDataPartInHex

▸ **setDataPartInHex**(`dataPart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Inherited from

SmartContract.setDataPartInHex

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:134

___

### updateState

▸ **updateState**(`preimage`, `amount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | `SigHashPreimage` |
| `amount` | `bigint` |

#### Returns

`boolean`

#### Inherited from

SmartContract.updateState

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:128

___

### updateStateSigHashType

▸ **updateStateSigHashType**(`txPreimage`, `amount`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | `SigHashPreimage` |
| `amount` | `bigint` |
| `sigHashType` | `SigHashType` |

#### Returns

`boolean`

#### Inherited from

SmartContract.updateStateSigHashType

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:110

___

### verify

▸ **verify**<`T`\>(`entryMethodInvoking`): `SamePromiseOrValue`<`T`, `VerifyResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `void` \| `Promise`<`void`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryMethodInvoking` | (`self`: [`GithubIssueWorkContract`](scrypt.GithubIssueWorkContract.md)) => `T` |

#### Returns

`SamePromiseOrValue`<`T`, `VerifyResult`\>

#### Inherited from

SmartContract.verify

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:101

___

### compile

▸ `Static` **compile**(): `Promise`<`undefined` \| `TranspileError`[]\>

#### Returns

`Promise`<`undefined` \| `TranspileError`[]\>

#### Inherited from

SmartContract.compile

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:93

___

### findKeyIndex

▸ `Static` **findKeyIndex**(`collection`, `key`, `keyType?`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Map`<`SupportedParamType`, `SupportedParamType`\> \| `Set`<`SupportedParamType`\> |
| `key` | `SupportedParamType` |
| `keyType?` | `string` |

#### Returns

`bigint`

#### Inherited from

SmartContract.findKeyIndex

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:152

___

### loadArtifact

▸ `Static` **loadArtifact**(`artifact`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `ContractArtifact` |

#### Returns

`void`

#### Inherited from

SmartContract.loadArtifact

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:94

___

## Signature Verification Methods

### checkMultiSig

▸ **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatures` | `Sig`[] |
| `publickeys` | `PubKey`[] |

#### Returns

`boolean`

#### Inherited from

SmartContract.checkMultiSig

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:127

___

### checkSig

▸ **checkSig**(`signature`, `publickey`): `boolean`

verifies an ECDSA signature. It takes two inputs from the stack, a public key (on top of the stack) and an ECDSA signature in its DER_CANONISED format concatenated with sighash flags. It outputs true or false on the stack based on whether the signature check passes or fails.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `Sig` |
| `publickey` | `PubKey` |

#### Returns

`boolean`

#### Inherited from

SmartContract.checkSig

#### Defined in

node_modules/scrypt-ts/dist/smart-contract/contract.d.ts:118
