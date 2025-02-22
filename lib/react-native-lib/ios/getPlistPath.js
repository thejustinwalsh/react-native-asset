/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const getBuildProperty = require('./getBuildProperty');

module.exports = function getPlistPath(project, sourceDir, platform = 'ios') {
  const plistFile = getBuildProperty(project, 'INFOPLIST_FILE', platform);

  if (!plistFile) {
    return null;
  }

  return path.join(
    sourceDir,
    plistFile.replace(/"/g, '').replace('$(SRCROOT)', ''),
  );
};
