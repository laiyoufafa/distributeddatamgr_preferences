/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'
import data_preferences from '@ohos.data.preferences'
import featureAbility from '@ohos.ability.FeatureAbility';

const NAME = 'test_preferences';
const KEY_TEST_INT_ELEMENT = 'key_test_int';
const KEY_TEST_LONG_ELEMENT = 'key_test_long';
const KEY_TEST_FLOAT_ELEMENT = 'key_test_float';
const KEY_TEST_BOOLEAN_ELEMENT = 'key_test_boolean';
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
var mPreferences;
var context;

describe('preferencesTest', function () {
    beforeAll(async function () {
        console.info('beforeAll')
        context = featureAbility.getContext()
        mPreferences = await data_preferences.getPreferences(context, NAME);
    })

    afterAll(async function () {
        console.info('afterAll')
        await data_preferences.deletePreferences(context, NAME);
    })

    /**
     * @tc.name clear callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0010
     * @tc.desc clear callback interface test
     */
    it('testPreferencesClear0012', 0, async function (done) {
        await mPreferences.put(KEY_TEST_STRING_ELEMENT, "test");
        await mPreferences.flush();
        await mPreferences.clear(async function (err, ret) {
            let pre = await mPreferences.get(KEY_TEST_STRING_ELEMENT, "defaultvalue")
            expect("defaultvalue").assertEqual(pre);
            done();
        });
    })

    /**
     * @tc.name has string callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0020
     * @tc.desc has string callback interface test
     */
    it('testPreferencesHasKey0032', 0, async function (done) {
        await mPreferences.put(KEY_TEST_STRING_ELEMENT, "test");
        await mPreferences.has(KEY_TEST_STRING_ELEMENT, function (err, ret) {
            expect(true).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name has int callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0130
     * @tc.desc has int callback interface test
     */
    it('testPreferencesHasKey0033', 0, async function (done) {
        await mPreferences.put(KEY_TEST_INT_ELEMENT, 1);
        await mPreferences.has(KEY_TEST_INT_ELEMENT, function (err, ret) {
            expect(true).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name has float callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0140
     * @tc.desc has float callback interface test
     */
    it('testPreferencesHasKey0034', 0, async function (done) {
        await mPreferences.put(KEY_TEST_FLOAT_ELEMENT, 1.1);
        await mPreferences.has(KEY_TEST_FLOAT_ELEMENT, function (err, ret) {
            expect(true).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name has long callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0150
     * @tc.desc has long callback interface test
     */
    it('testPreferencesHasKey0035', 0, async function (done) {
        await mPreferences.put(KEY_TEST_LONG_ELEMENT, 0);
        await mPreferences.has(KEY_TEST_LONG_ELEMENT, function (err, ret) {
            expect(true).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name has boolean callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0160
     * @tc.desc has boolean callback interface test
     */
    it('testPreferencesHasKey0036', 0, async function (done) {
        await mPreferences.put(KEY_TEST_BOOLEAN_ELEMENT, false);
        await mPreferences.has(KEY_TEST_BOOLEAN_ELEMENT, function (err, ret) {
            expect(true).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name get defaultValue callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0030
     * @tc.desc get defaultValue callback interface test
     */
    it('testPreferencesGetDefValue0062', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.get(KEY_TEST_STRING_ELEMENT, "defaultValue", function (err, ret) {
            expect('defaultValue').assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name get float callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0040
     * @tc.desc get float callback interface test
     */
    it('testPreferencesGetFloat0072', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_FLOAT_ELEMENT, 3.0);
        await mPreferences.get(KEY_TEST_FLOAT_ELEMENT, 0.0, function (err, ret) {
            expect(3.0).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name get int callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0050
     * @tc.desc get int callback interface test
     */
    it('testPreferencesGetInt0082', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_INT_ELEMENT, 3);
        await mPreferences.get(KEY_TEST_INT_ELEMENT, 0.0, function (err, ret) {
            expect(3).assertEqual(ret);
            done();
        })
    })

    /**
     * @tc.name get long callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0060
     * @tc.desc get long callback interface test
     */
    it('testPreferencesGetLong0092', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_LONG_ELEMENT, 3);
        let pref = await mPreferences.get(KEY_TEST_LONG_ELEMENT, 0)
        expect(3).assertEqual(pref);
        await mPreferences.get(KEY_TEST_LONG_ELEMENT, 0, function (err, ret) {
            expect(3).assertEqual(ret);
            done();
        });
    })

    /**
     * @tc.name get String callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0070
     * @tc.desc get String callback interface test
     */
    it('testPreferencesGetString102', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_STRING_ELEMENT, "test");
        await mPreferences.flush();
        await mPreferences.get(KEY_TEST_STRING_ELEMENT, "defaultvalue", function (err, ret) {
            expect('test').assertEqual(ret);
            done();
        });
    })

    /**
     * @tc.name put boolean callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0080
     * @tc.desc put boolean callback interface test
     */
    it('testPreferencesPutBoolean0122', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_BOOLEAN_ELEMENT, true, async function (err, ret) {
            let pre = await mPreferences.get(KEY_TEST_BOOLEAN_ELEMENT, false);
            expect(true).assertEqual(pre);
            await mPreferences.flush();
            let pre2 = await mPreferences.get(KEY_TEST_BOOLEAN_ELEMENT, false)
            expect(true).assertEqual(pre2);
            done();
        });
    })

    /**
     * @tc.name put float callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0090
     * @tc.desc put float callback interface test
     */
    it('testPreferencesPutFloat0132', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_FLOAT_ELEMENT, 4.0, async function (err, ret) {
            let pre = await mPreferences.get(KEY_TEST_FLOAT_ELEMENT, 0.0);
            expect(4.0).assertEqual(pre);
            await mPreferences.flush();
            let pre2 = await mPreferences.get(KEY_TEST_FLOAT_ELEMENT, 0.0);
            expect(4.0).assertEqual(pre2);
            done();
        });
    })

    /**
     * @tc.name put int callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0100
     * @tc.desc put int callback interface test
     */
    it('testPreferencesPutInt0142', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_INT_ELEMENT, 4, async function (err, ret) {
            let pre = await mPreferences.get(KEY_TEST_INT_ELEMENT, 0);
            expect(4).assertEqual(pre);
            await mPreferences.flush();
            let pre2 = await mPreferences.get(KEY_TEST_INT_ELEMENT, 0);
            expect(4).assertEqual(pre2);
            done();
        });
    })

    /**
     * @tc.name put long callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0110
     * @tc.desc put long callback interface test
     */
    it('testPreferencesPutLong0152', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_LONG_ELEMENT, 4);
        await mPreferences.put(KEY_TEST_LONG_ELEMENT, 4, async function (err, ret) {
            let pre = await mPreferences.get(KEY_TEST_LONG_ELEMENT, 0);
            expect(4).assertEqual(pre);
            await mPreferences.flush();
            let pre2 = await mPreferences.get(KEY_TEST_LONG_ELEMENT, 0);
            expect(4).assertEqual(pre2);
            done();
        });
    })

    /**
     * @tc.name put String callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_CallBack_0120
     * @tc.desc put String callback interface test
     */
    it('testPreferencesPutString0162', 0, async function (done) {
        await mPreferences.clear();
        await mPreferences.put(KEY_TEST_STRING_ELEMENT, '', async function (err, ret) {
            let pre = await mPreferences.get(KEY_TEST_STRING_ELEMENT, "defaultvalue")
            expect('').assertEqual(pre);
            await mPreferences.flush();
            let pre2 = await mPreferences.get(KEY_TEST_STRING_ELEMENT, "defaultvalue")
            expect('').assertEqual(pre2);
            done();
        });
    })
})