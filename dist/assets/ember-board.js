"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('ember-board/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'ember-board/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _emberBoardConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberBoardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberBoardConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberBoardConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-board/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-board/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberBoardConfigEnvironment) {

  var name = _emberBoardConfigEnvironment['default'].APP.name;
  var version = _emberBoardConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ember-board/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('ember-board/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('ember-board/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('ember-board/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('ember-board/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('ember-board/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('ember-board/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('ember-board/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('ember-board/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('ember-board/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('ember-board/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('ember-board/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('ember-board/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('ember-board/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('ember-board/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('ember-board/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('ember-board/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('ember-board/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('ember-board/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('ember-board/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('ember-board/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('ember-board/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('ember-board/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('ember-board/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('ember-board/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('ember-board/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('ember-board/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-board/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-accordion-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-accordion-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-accordion-item.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-accordion.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-accordion.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-accordion.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-alert.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-alert.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-alert.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-button-group.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-button-group.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-button-group.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-button.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-button.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-button.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-collapse.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-collapse.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-collapse.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-dropdown-button.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-dropdown-button.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-dropdown-button.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-dropdown-menu.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-dropdown-menu.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-dropdown-menu.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-dropdown-toggle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-dropdown-toggle.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-dropdown-toggle.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-dropdown.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-dropdown.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-dropdown.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-form-element.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-form-element.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-form-element.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-form-group.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-form-group.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-form-group.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-form.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-form.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-form.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-input.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-input.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-input.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-modal-body.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-modal-body.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-modal-body.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-modal-dialog.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-modal-dialog.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-modal-dialog.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-modal-footer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-modal-footer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-modal-footer.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-modal-header.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-modal-header.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-modal-header.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-modal.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-modal.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-modal.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-progress-bar.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-progress-bar.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-progress-bar.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-progress.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-progress.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-progress.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-select.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-select.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-select.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/components/bs-textarea.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/components');
  QUnit.test('modules/ember-bootstrap/components/bs-textarea.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/components/bs-textarea.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/config.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap');
  QUnit.test('modules/ember-bootstrap/config.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/config.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/helpers/is-equal.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/helpers');
  QUnit.test('modules/ember-bootstrap/helpers/is-equal.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/helpers/is-equal.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/helpers/is-not.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/helpers');
  QUnit.test('modules/ember-bootstrap/helpers/is-not.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/helpers/is-not.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/helpers/read-path.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/helpers');
  QUnit.test('modules/ember-bootstrap/helpers/read-path.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/helpers/read-path.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/initializers/modals-container.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/initializers');
  QUnit.test('modules/ember-bootstrap/initializers/modals-container.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/initializers/modals-container.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/component-child.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/component-child.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/component-child.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/component-parent.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/component-parent.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/component-parent.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/dropdown-toggle.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/dropdown-toggle.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/dropdown-toggle.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/modal-closer.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/modal-closer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/modal-closer.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/size-class.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/size-class.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/size-class.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/sub-component.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/sub-component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/sub-component.js should pass jshint.');
  });
});
define('ember-board/ember-bootstrap/tests/modules/ember-bootstrap/mixins/type-class.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-bootstrap/mixins');
  QUnit.test('modules/ember-bootstrap/mixins/type-class.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-bootstrap/mixins/type-class.js should pass jshint.');
  });
});
define('ember-board/helpers/is-equal', ['exports', 'ember-bootstrap/helpers/is-equal'], function (exports, _emberBootstrapHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersIsEqual.isEqual;
    }
  });
});
define('ember-board/helpers/is-not', ['exports', 'ember-bootstrap/helpers/is-not'], function (exports, _emberBootstrapHelpersIsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersIsNot['default'];
    }
  });
  Object.defineProperty(exports, 'isNot', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersIsNot.isNot;
    }
  });
});
define('ember-board/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
  Object.defineProperty(exports, 'momentCalendar', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar.momentCalendar;
    }
  });
});
define('ember-board/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('ember-board/helpers/moment-format', ['exports', 'ember', 'ember-board/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _emberBoardConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberBoardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-board/helpers/moment-from-now', ['exports', 'ember', 'ember-board/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _emberBoardConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberBoardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-board/helpers/moment-to-now', ['exports', 'ember', 'ember-board/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _emberBoardConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberBoardConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-board/helpers/read-path', ['exports', 'ember-bootstrap/helpers/read-path'], function (exports, _emberBootstrapHelpersReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersReadPath.readPath;
    }
  });
});
define('ember-board/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-board/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberBoardConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberBoardConfigEnvironment['default'].APP.name, _emberBoardConfigEnvironment['default'].APP.version)
  };
});
define('ember-board/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('ember-board/initializers/export-application-global', ['exports', 'ember', 'ember-board/config/environment'], function (exports, _ember, _emberBoardConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberBoardConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emberBoardConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberBoardConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-board/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('ember-board/initializers/initialize-torii-session', ['exports', 'torii/configuration', 'torii/bootstrap/session'], function (exports, _toriiConfiguration, _toriiBootstrapSession) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (_toriiConfiguration['default'].sessionServiceName) {
        (0, _toriiBootstrapSession['default'])(application, _toriiConfiguration['default'].sessionServiceName);

        var sessionFactoryName = 'service:' + _toriiConfiguration['default'].sessionServiceName;
        application.inject('adapter', _toriiConfiguration['default'].sessionServiceName, sessionFactoryName);
      }
    }
  };
});
define('ember-board/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration'], function (exports, _toriiBootstrapTorii, _toriiConfiguration) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  if (window.DS) {
    initializer.after = 'store';
  }

  exports['default'] = initializer;
});
define('ember-board/initializers/load-bootstrap-config', ['exports', 'ember-board/config/environment', 'ember-bootstrap/config'], function (exports, _emberBoardConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_emberBoardConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('ember-board/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('ember-board/instance-initializers/setup-routes', ['exports', 'torii/configuration', 'torii/bootstrap/routing', 'torii/router-dsl-ext'], function (exports, _toriiConfiguration, _toriiBootstrapRouting, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      if (_toriiConfiguration['default'].sessionServiceName) {
        var router = applicationInstance.get('router');
        var setupRoutes = function setupRoutes() {
          var authenticatedRoutes = router.router.authenticatedRoutes;
          var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
          if (hasAuthenticatedRoutes) {
            (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
          }
          router.off('willTransition', setupRoutes);
        };
        router.on('willTransition', setupRoutes);
      }
    }
  };
});
define('ember-board/instance-initializers/walk-providers', ['exports', 'torii/configuration', 'torii/lib/container-utils'], function (exports, _toriiConfiguration, _toriiLibContainerUtils) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in _toriiConfiguration['default'].providers) {
        if (_toriiConfiguration['default'].providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('ember-board/pods/application/adapter', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, _ember, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: _ember['default'].inject.service()
  });
});
define("ember-board/pods/application/route", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    beforeModel: function beforeModel() {
      return this.get("session").fetch()["catch"](function () {});
    },
    actions: {
      signIn: function signIn(provider) {
        this.get("session").open("firebase", { provider: provider }).then(function (data) {
          console.log(data.currentUser);
        });
      },
      signOut: function signOut() {
        this.get("session").close();
      }
    }
  });
});
define("ember-board/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-board/pods/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-board/pods/clean/util', ['exports'], function (exports) {
    exports['default'] = clean;

    function clean(title) {
        title = title.replace(/ /g, '_');
        return title.replace(/[^a-zA-Z0-9-_]/g, '');
    }
});
define('ember-board/pods/comment/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    body: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    user: _emberData['default'].belongsTo('user'),
    post: _emberData['default'].belongsTo('post')
  });
});
define('ember-board/pods/components/add-comments/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			submitComment: function submitComment(body, post, session) {
				this.sendAction('submitComment', body, post, session);
				this.set('body', '');
			},

			signIn: function signIn(provider) {
				this.sendAction('signIn', provider);
			},

			signOut: function signOut() {
				this.sendAction('signOut');
			}
		}
	});
});
define("ember-board/pods/components/add-comments/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-comments/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-info");
          dom.setAttribute(el1, "style", "margin: 50px 0;");
          var el2 = dom.createTextNode("Sorry, no comments yet. Be the first: ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-comments/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel panel-default");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "panel-heading");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3, "class", "panel-title");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" said...");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "panel-body");
          var el3 = dom.createTextNode("\n    	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("strong");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    	");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [1]);
          var element9 = dom.childAt(element8, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element8, [1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element9, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(element9, 6, 6);
          return morphs;
        },
        statements: [["content", "comment.user.username", ["loc", [null, [9, 30], [9, 55]]]], ["content", "comment.body", ["loc", [null, [12, 13], [12, 29]]]], ["content", "comment.date", ["loc", [null, [14, 5], [14, 21]]]]],
        locals: ["comment"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-comments/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "class", "box");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "margin-bottom: 25px;float:left");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3, "style", "border-radius:9999px;");
          dom.setAttribute(el3, "height", "70px");
          dom.setAttribute(el3, "width", "70px");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "text-align:center;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "float:right;width:calc(100% - 100px);");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("textarea");
          dom.setAttribute(el4, "class", "form-control");
          dom.setAttribute(el4, "rows", "2");
          dom.setAttribute(el4, "placeholder", "Add New Comment");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn btn-default");
          var el4 = dom.createTextNode("Submit");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "logout");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createTextNode("Logout");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element1, [3]);
          var element5 = dom.childAt(element4, [1, 1]);
          var element6 = dom.childAt(element4, [3]);
          var element7 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(6);
          morphs[0] = dom.createAttrMorph(element3, 'src');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [4]), 0, 0);
          morphs[2] = dom.createAttrMorph(element5, 'value');
          morphs[3] = dom.createAttrMorph(element5, 'onchange');
          morphs[4] = dom.createElementMorph(element6);
          morphs[5] = dom.createElementMorph(element7);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "session.currentUser.profileImageURL", ["loc", [null, [22, 50], [22, 85]]]]]]], ["content", "session.currentUser.username", ["loc", [null, [23, 40], [23, 72]]]], ["attribute", "value", ["get", "body", ["loc", [null, [27, 87], [27, 91]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "body", ["loc", [null, [27, 117], [27, 121]]]]], [], ["loc", [null, [27, 112], [27, 122]]]]], ["value", "target.value"], ["loc", [null, [27, 103], [27, 145]]]]], ["element", "action", ["submitComment", ["get", "body", ["loc", [null, [29, 63], [29, 67]]]], ["get", "post", ["loc", [null, [29, 68], [29, 72]]]], ["get", "session", ["loc", [null, [29, 73], [29, 80]]]]], [], ["loc", [null, [29, 38], [29, 82]]]], ["element", "action", ["signOut"], [], ["loc", [null, [33, 36], [33, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 0
            },
            "end": {
              "line": 39,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-comments/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "login");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("Login to add a room");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["signIn", "twitter"], [], ["loc", [null, [37, 12], [37, 41]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
            "column": 7
          }
        },
        "moduleName": "ember-board/pods/components/add-comments/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        dom.setAttribute(el1, "style", "margin-top: 50px;");
        var el2 = dom.createTextNode("Comments:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "post.comments", ["loc", [null, [1, 10], [1, 23]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 11]]]], ["block", "each", [["get", "post.comments", ["loc", [null, [6, 8], [6, 21]]]]], [], 1, null, ["loc", [null, [6, 0], [17, 9]]]], ["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [19, 6], [19, 29]]]]], [], 2, 3, ["loc", [null, [19, 0], [39, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('ember-board/pods/components/add-posts/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			submitPost: function submitPost(title, body, room, session) {
				this.sendAction('submitPost', title, body, room, session);
				this.set('title', '');
				this.set('body', '');
			},

			signIn: function signIn(provider) {
				this.sendAction('signIn', provider);
			},

			signOut: function signOut() {
				this.sendAction('signOut');
			}
		}
	});
});
define("ember-board/pods/components/add-posts/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-posts/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-info");
          dom.setAttribute(el1, "style", "margin: 50px 0;");
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Sorry, no posts yet.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Be the first: ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 9
              },
              "end": {
                "line": 8,
                "column": 59
              }
            },
            "moduleName": "ember-board/pods/components/add-posts/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "post.title", ["loc", [null, [8, 45], [8, 59]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-posts/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel panel-default");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "panel-body");
          var el3 = dom.createTextNode("\n    	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    	Posted by: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("em");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element9 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element9, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element9, 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element9, [7]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["posts", ["get", "room.id", ["loc", [null, [8, 28], [8, 35]]]], ["get", "post.id", ["loc", [null, [8, 36], [8, 43]]]]], [], 0, null, ["loc", [null, [8, 9], [8, 71]]]], ["content", "post.user.username", ["loc", [null, [9, 16], [9, 38]]]], ["content", "post.date", ["loc", [null, [10, 9], [10, 22]]]]],
        locals: ["post"],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-posts/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          dom.setAttribute(el1, "style", "margin:75px 0 25px");
          var el2 = dom.createTextNode("Add a post:");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "class", "box");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "margin-bottom: 25px;float:left");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3, "style", "border-radius:9999px;");
          dom.setAttribute(el3, "height", "70px");
          dom.setAttribute(el3, "width", "70px");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "text-align:center;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "float:right;width:calc(100% - 100px);");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("textarea");
          dom.setAttribute(el4, "class", "form-control");
          dom.setAttribute(el4, "rows", "2");
          dom.setAttribute(el4, "placeholder", "Add New Post");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("textarea");
          dom.setAttribute(el4, "class", "form-control");
          dom.setAttribute(el4, "rows", "2");
          dom.setAttribute(el4, "placeholder", "Post content");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn btn-default");
          var el4 = dom.createTextNode("Submit");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "logout");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createTextNode("Logout");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element1, [3]);
          var element5 = dom.childAt(element4, [1, 1]);
          var element6 = dom.childAt(element4, [3, 1]);
          var element7 = dom.childAt(element4, [5]);
          var element8 = dom.childAt(fragment, [5, 1]);
          var morphs = new Array(8);
          morphs[0] = dom.createAttrMorph(element3, 'src');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [4]), 0, 0);
          morphs[2] = dom.createAttrMorph(element5, 'value');
          morphs[3] = dom.createAttrMorph(element5, 'onchange');
          morphs[4] = dom.createAttrMorph(element6, 'value');
          morphs[5] = dom.createAttrMorph(element6, 'onchange');
          morphs[6] = dom.createElementMorph(element7);
          morphs[7] = dom.createElementMorph(element8);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "session.currentUser.profileImageURL", ["loc", [null, [19, 52], [19, 87]]]]]]], ["content", "session.currentUser.username", ["loc", [null, [20, 42], [20, 74]]]], ["attribute", "value", ["get", "title", ["loc", [null, [24, 86], [24, 91]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "title", ["loc", [null, [24, 117], [24, 122]]]]], [], ["loc", [null, [24, 112], [24, 123]]]]], ["value", "target.value"], ["loc", [null, [24, 103], [24, 146]]]]], ["attribute", "value", ["get", "body", ["loc", [null, [27, 86], [27, 90]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "body", ["loc", [null, [27, 116], [27, 120]]]]], [], ["loc", [null, [27, 111], [27, 121]]]]], ["value", "target.value"], ["loc", [null, [27, 102], [27, 144]]]]], ["element", "action", ["submitPost", ["get", "title", ["loc", [null, [29, 62], [29, 67]]]], ["get", "body", ["loc", [null, [29, 68], [29, 72]]]], ["get", "room", ["loc", [null, [29, 73], [29, 77]]]], ["get", "session", ["loc", [null, [29, 78], [29, 85]]]]], [], ["loc", [null, [29, 40], [29, 87]]]], ["element", "action", ["signOut"], [], ["loc", [null, [33, 36], [33, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 0
            },
            "end": {
              "line": 39,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-posts/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "login");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("Login to add a post");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["signIn", "twitter"], [], ["loc", [null, [37, 12], [37, 41]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
            "column": 7
          }
        },
        "moduleName": "ember-board/pods/components/add-posts/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "room.posts", ["loc", [null, [1, 10], [1, 20]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 11]]]], ["block", "each", [["get", "room.posts", ["loc", [null, [5, 8], [5, 18]]]]], [], 1, null, ["loc", [null, [5, 0], [13, 9]]]], ["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [15, 6], [15, 29]]]]], [], 2, 3, ["loc", [null, [15, 0], [39, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('ember-board/pods/components/add-rooms/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      submitRoom: function submitRoom(name, description, session) {
        this.sendAction('submitRoom', name, description, session);
        this.set('name', '');
        this.set('description', '');
      },

      signIn: function signIn(provider) {
        this.sendAction('signIn', provider);
      },

      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define("ember-board/pods/components/add-rooms/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-rooms/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode(" No Rooms");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 14
              },
              "end": {
                "line": 21,
                "column": 55
              }
            },
            "moduleName": "ember-board/pods/components/add-rooms/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "room.name", ["loc", [null, [21, 42], [21, 55]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 6
            },
            "end": {
              "line": 33,
              "column": 6
            }
          },
          "moduleName": "ember-board/pods/components/add-rooms/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "posts");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "description");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "description");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "description");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element9 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element9, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element9, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element9, [7]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["rooms", ["get", "room.id", ["loc", [null, [21, 33], [21, 40]]]]], [], 0, null, ["loc", [null, [21, 14], [21, 67]]]], ["content", "room.description", ["loc", [null, [24, 14], [24, 34]]]], ["content", "room.posts.length", ["loc", [null, [27, 14], [27, 35]]]], ["content", "room.admin.username", ["loc", [null, [30, 14], [30, 37]]]]],
        locals: ["room"],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 0
            },
            "end": {
              "line": 58,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-rooms/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Add a new room: ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("form");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "margin-bottom: 25px;float:left");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3, "style", "border-radius:9999px;");
          dom.setAttribute(el3, "height", "70px");
          dom.setAttribute(el3, "width", "70px");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "text-align:center;");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "style", "float:right;width:calc(100% - 100px);");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("input");
          dom.setAttribute(el4, "type", "text");
          dom.setAttribute(el4, "class", "form-control");
          dom.setAttribute(el4, "rows", "2");
          dom.setAttribute(el4, "placeholder", "Add New Room");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("textarea");
          dom.setAttribute(el4, "class", "form-control");
          dom.setAttribute(el4, "rows", "2");
          dom.setAttribute(el4, "placeholder", "Add description");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn btn-default");
          var el4 = dom.createTextNode("Submit");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "logout");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createTextNode("Logout");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element1, [3]);
          var element5 = dom.childAt(element4, [1, 1]);
          var element6 = dom.childAt(element4, [3, 1]);
          var element7 = dom.childAt(element4, [5]);
          var element8 = dom.childAt(fragment, [5, 1]);
          var morphs = new Array(8);
          morphs[0] = dom.createAttrMorph(element3, 'src');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [4]), 0, 0);
          morphs[2] = dom.createAttrMorph(element5, 'value');
          morphs[3] = dom.createAttrMorph(element5, 'onchange');
          morphs[4] = dom.createAttrMorph(element6, 'value');
          morphs[5] = dom.createAttrMorph(element6, 'onchange');
          morphs[6] = dom.createElementMorph(element7);
          morphs[7] = dom.createElementMorph(element8);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "session.currentUser.profileImageURL", ["loc", [null, [42, 52], [42, 87]]]]]]], ["content", "session.currentUser.username", ["loc", [null, [43, 42], [43, 74]]]], ["attribute", "value", ["get", "name", ["loc", [null, [47, 95], [47, 99]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "name", ["loc", [null, [47, 125], [47, 129]]]]], [], ["loc", [null, [47, 120], [47, 130]]]]], ["value", "target.value"], ["loc", [null, [47, 111], [47, 153]]]]], ["attribute", "value", ["get", "description", ["loc", [null, [50, 89], [50, 100]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "description", ["loc", [null, [50, 126], [50, 137]]]]], [], ["loc", [null, [50, 121], [50, 138]]]]], ["value", "target.value"], ["loc", [null, [50, 112], [50, 161]]]]], ["element", "action", ["submitRoom", ["get", "name", ["loc", [null, [52, 38], [52, 42]]]], ["get", "description", ["loc", [null, [52, 43], [52, 54]]]], ["get", "session", ["loc", [null, [52, 55], [52, 62]]]]], [], ["loc", [null, [52, 16], [52, 64]]]], ["element", "action", ["signOut"], [], ["loc", [null, [56, 36], [56, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 58,
              "column": 0
            },
            "end": {
              "line": 62,
              "column": 0
            }
          },
          "moduleName": "ember-board/pods/components/add-rooms/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "login");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createTextNode("Login to add a room");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["signIn", "twitter"], [], ["loc", [null, [60, 36], [60, 65]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 62,
            "column": 7
          }
        },
        "moduleName": "ember-board/pods/components/add-rooms/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("EmberBoard -- Rooms");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "table-responsive");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "table table-striped");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Room name");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Description");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Posts");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Admin");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "rooms", ["loc", [null, [3, 10], [3, 15]]]]], [], 0, null, ["loc", [null, [3, 0], [5, 11]]]], ["block", "each", [["get", "rooms", ["loc", [null, [18, 14], [18, 19]]]]], [], 1, null, ["loc", [null, [18, 6], [33, 15]]]], ["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [38, 6], [38, 29]]]]], [], 2, 3, ["loc", [null, [38, 0], [62, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('ember-board/pods/excerpt/helper', ['exports', 'ember'], function (exports, _ember) {
  exports.excerpt = excerpt;

  function excerpt(params) {
    return params[0].substring(0, 25) + '...';
  }

  exports['default'] = _ember['default'].Helper.helper(excerpt);
});
define('ember-board/pods/get-or-create-user/util', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = getOrCreateUser;
    var Promise = _ember['default'].RSVP.Promise;

    function getOrCreateUser(uid, username, avatar, store) {
        return new Promise(function (resolve) {
            store.query('user', { orderBy: 'uid', equalTo: uid }).then(function (records) {
                if (records.get('length') === 0) {
                    resolve(store.createRecord('user', {
                        uid: uid,
                        username: username,
                        avatar: avatar
                    }));
                } else {
                    resolve(records.get('firstObject'));
                }
            });
        });
    }
});
define('ember-board/pods/index/route', ['exports', 'ember', 'ember-board/pods/clean/util', 'ember-board/pods/get-or-create-user/util'], function (exports, _ember, _emberBoardPodsCleanUtil, _emberBoardPodsGetOrCreateUserUtil) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('room');
    },
    actions: {
      submitRoom: function submitRoom(name, description, author) {
        var _this = this;

        var slug = (0, _emberBoardPodsCleanUtil['default'])(name);
        var uid = author.get('uid');
        var user = (0, _emberBoardPodsGetOrCreateUserUtil['default'])(uid, _ember['default'].get(this, 'session.currentUser.username'), _ember['default'].get(this, 'session.currentUser.profileImageURL'), this.store);

        user.then(function (userData) {

          var room = _this.store.createRecord('room', {
            name: name,
            description: description,
            slug: slug,
            admin: _ember['default'].get(_this, 'session.currentUser')
          });

          userData.get('rooms').addObject(room);

          room.save().then(function () {
            userData.save();
          });
        });
      }
    }
  });
});
define("ember-board/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["empty-body"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 100
            }
          },
          "moduleName": "ember-board/pods/index/template.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 114
          }
        },
        "moduleName": "ember-board/pods/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "add-rooms", [], ["rooms", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 19], [1, 24]]]]], [], []], "submitRoom", "submitRoom", "signIn", "signIn", "signOut", "signOut", "session", ["subexpr", "@mut", [["get", "session", ["loc", [null, [1, 91], [1, 98]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [1, 114]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('ember-board/pods/post/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    body: _emberData['default'].attr('string'),
    comments: _emberData['default'].hasMany('comment'),
    user: _emberData['default'].belongsTo('user'),
    date: _emberData['default'].attr('date'),
    room: _emberData['default'].belongsTo('room')
  });
});
define('ember-board/pods/posts/route', ['exports', 'ember', 'ember-board/pods/get-or-create-user/util'], function (exports, _ember, _emberBoardPodsGetOrCreateUserUtil) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.store.find('post', params.postId);
		},
		actions: {
			submitComment: function submitComment(body, post, author) {
				var _this = this;

				var uid = author.get('uid');
				var user = (0, _emberBoardPodsGetOrCreateUserUtil['default'])(uid, _ember['default'].get(this, 'session.currentUser.username'), _ember['default'].get(this, 'session.currentUser.profileImageURL'), this.store);

				user.then(function (userData) {

					var comment = _this.store.createRecord('comment', {
						body: body,
						user: _ember['default'].get(_this, 'session.currentUser'),
						date: new Date()
					});

					post.get('comments').addObject(comment);
					userData.get('comments').addObject(comment);

					comment.save().then(function () {
						post.save();
					}).then(function () {
						userData.save();
					});
				});
			}
		}
	});
});
define("ember-board/pods/posts/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 46
            }
          },
          "moduleName": "ember-board/pods/posts/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back to room");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 109
            }
          },
          "moduleName": "ember-board/pods/posts/template.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 126
          }
        },
        "moduleName": "ember-board/pods/posts/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-primary");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3, "class", "panel-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Posted by ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("em");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 0, 0);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [7]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [11]), 0, 0);
        morphs[5] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["rooms", ["get", "model.room.id", ["loc", [null, [1, 19], [1, 32]]]]], [], 0, null, ["loc", [null, [1, 0], [1, 58]]]], ["content", "model.title", ["loc", [null, [5, 28], [5, 43]]]], ["content", "model.body", ["loc", [null, [8, 4], [8, 18]]]], ["content", "model.user.username", ["loc", [null, [10, 22], [10, 45]]]], ["content", "model.date", ["loc", [null, [11, 8], [11, 22]]]], ["block", "add-comments", [], ["post", ["subexpr", "@mut", [["get", "model", ["loc", [null, [15, 21], [15, 26]]]]], [], []], "submitComment", "submitComment", "signIn", "signIn", "signOut", "signOut", "session", ["subexpr", "@mut", [["get", "session", ["loc", [null, [15, 100], [15, 107]]]]], [], []]], 1, null, ["loc", [null, [15, 0], [15, 126]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('ember-board/pods/room/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    slug: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    admin: _emberData['default'].belongsTo('user', { async: true }),
    posts: _emberData['default'].hasMany('post')
  });
});
define('ember-board/pods/rooms/route', ['exports', 'ember', 'ember-board/pods/get-or-create-user/util'], function (exports, _ember, _emberBoardPodsGetOrCreateUserUtil) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.store.findRecord('room', params.roomId);
		},
		actions: {
			submitPost: function submitPost(title, body, room, author) {
				var _this = this;

				var uid = author.get('uid');
				var user = (0, _emberBoardPodsGetOrCreateUserUtil['default'])(uid, _ember['default'].get(this, 'session.currentUser.username'), _ember['default'].get(this, 'session.currentUser.profileImageURL'), this.store);

				user.then(function (userData) {

					var post = _this.store.createRecord('post', {
						title: title,
						body: body,
						user: _ember['default'].get(_this, 'session.currentUser'),
						date: new Date(),
						room: room
					});

					room.get('posts').addObject(post);
					userData.get('posts').addObject(post);

					post.save().then(function () {
						room.save();
					}).then(function () {
						userData.save();
					});
				});
			}
		}
	});
});
define("ember-board/pods/rooms/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 33
            }
          },
          "moduleName": "ember-board/pods/rooms/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back to rooms");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 100
            }
          },
          "moduleName": "ember-board/pods/rooms/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 114
          }
        },
        "moduleName": "ember-board/pods/rooms/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("small");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        var el2 = dom.createTextNode("Room created by:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "style", "margin-bottom: 50px;border-radius:9999px;");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [6]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [2]), 0, 0);
        morphs[3] = dom.createAttrMorph(element1, 'src');
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [1, 0], [1, 45]]]], ["content", "model.name", ["loc", [null, [3, 4], [3, 18]]]], ["content", "model.description", ["loc", [null, [3, 26], [3, 47]]]], ["attribute", "src", ["concat", [["get", "model.admin.avatar", ["loc", [null, [5, 62], [5, 80]]]]]]], ["content", "model.admin.username", ["loc", [null, [5, 85], [5, 109]]]], ["block", "add-posts", [], ["session", ["subexpr", "@mut", [["get", "session", ["loc", [null, [7, 21], [7, 28]]]]], [], []], "room", ["subexpr", "@mut", [["get", "model", ["loc", [null, [7, 34], [7, 39]]]]], [], []], "submitPost", "submitPost", "signIn", "signIn", "signOut", "signOut"], 1, null, ["loc", [null, [7, 0], [7, 114]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('ember-board/pods/user/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    uid: _emberData['default'].attr('string'),
    username: _emberData['default'].attr('string'),
    avatar: _emberData['default'].attr('string'),
    posts: _emberData['default'].hasMany('post'),
    comments: _emberData['default'].hasMany('comment'),
    rooms: _emberData['default'].hasMany('room', { async: true })
  });
});
define('ember-board/router', ['exports', 'ember', 'ember-board/config/environment'], function (exports, _ember, _emberBoardConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberBoardConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('rooms', { path: 'rooms/:roomId' });
    this.route('posts', { path: 'rooms/:roomId/posts/:postId' });
  });

  exports['default'] = Router;
});
define('ember-board/services/firebase', ['exports', 'emberfire/services/firebase', 'ember-board/config/environment'], function (exports, _emberfireServicesFirebase, _emberBoardConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _emberBoardConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});
define('ember-board/services/moment', ['exports', 'ember', 'ember-board/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _emberBoardConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_emberBoardConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("ember-board/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 16
          }
        },
        "moduleName": "ember-board/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]]], "collapsed"], [], ["loc", [null, [1, 63], [1, 91]]]]]]], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]]], ["content", "title", ["loc", [null, [4, 12], [4, 21]]]], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]]]], [], []], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "ember-board/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "dismissed", ["loc", [null, [1, 10], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "ember-board/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "ember-board/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]]]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]]], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "ember-board/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "ember-board/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-board/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]]]], [], []], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]]]], [], []]], ["loc", [null, [4, 12], [4, 67]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "ember-board/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "ember-board/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]]]]]], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]]]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]]]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]]]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("ember-board/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]]]], [], ["loc", [null, [2, 4], [2, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]]]], [], []]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]]]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "ember-board/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]]]], [], ["loc", [null, [5, 4], [5, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ember-board/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "ember-board/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [4, 2], [4, 11]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 0
              }
            },
            "moduleName": "ember-board/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [8, 34], [8, 38]]]], "fade"], [], ["loc", [null, [8, 29], [8, 47]]]], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [8, 53], [8, 55]]]], "in"], [], ["loc", [null, [8, 48], [8, 62]]]]]]], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [8, 70], [8, 80]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]]], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]]]], [], []], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]]]], [], []], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]]]], [], []], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]]]], [], []], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]]]], [], []], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]]]], [], []], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]]]], [], []], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]]]], [], []], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]]]], [], []], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]]]], [], []], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]]]], [], []]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [7, 6], [7, 18]]]]], [], 1, null, ["loc", [null, [7, 0], [9, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 19
          }
        },
        "moduleName": "ember-board/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container"], 0, null, ["loc", [null, [1, 0], [11, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]]]], [], ["loc", [null, [4, 8], [4, 32]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]]]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]]]], [], ["loc", [null, [10, 30], [10, 54]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]]]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-board/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "is-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]]]], [], ["loc", [null, [2, 30], [2, 46]]]]], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "read-path", [["get", "item", ["loc", [null, [8, 31], [8, 35]]]], ["get", "optionValuePath", ["loc", [null, [8, 36], [8, 51]]]]], [], ["loc", [null, [8, 19], [8, 53]]]]]]], ["attribute", "selected", ["subexpr", "is-equal", [["get", "item", ["loc", [null, [9, 32], [9, 36]]]], ["get", "value", ["loc", [null, [9, 37], [9, 42]]]]], [], ["loc", [null, [9, 21], [9, 44]]]]], ["inline", "read-path", [["get", "item", ["loc", [null, [10, 20], [10, 24]]]], ["get", "optionLabelPath", ["loc", [null, [10, 25], [10, 40]]]]], [], ["loc", [null, [10, 8], [10, 42]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "ember-board/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]]]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "errors.firstObject", ["loc", [null, [2, 29], [2, 51]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "ember-board/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showErrors", ["loc", [null, [1, 6], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "ember-board/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "ember-board/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]]]]]], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]]]], [], []]], ["loc", [null, [4, 12], [4, 61]]]], ["content", "label", ["loc", [null, [4, 62], [4, 71]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-board/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 76], [2, 85]]]], "-", ["get", "name", ["loc", [null, [2, 90], [2, 94]]]]], [], ["loc", [null, [2, 67], [2, 96]]]]]]], ["content", "label", ["loc", [null, [2, 98], [2, 107]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-input", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 30], [4, 39]]]], "-", ["get", "name", ["loc", [null, [4, 44], [4, 48]]]]], [], ["loc", [null, [4, 22], [4, 49]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 55], [4, 59]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [4, 65], [4, 76]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 83], [4, 88]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 101], [4, 112]]]]], [], []]], ["loc", [null, [4, 8], [4, 114]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 24], [10, 28]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [10, 34], [10, 45]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 52], [10, 57]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 70], [10, 81]]]]], [], []]], ["loc", [null, [10, 8], [10, 83]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 76], [2, 85]]]], "-", ["get", "name", ["loc", [null, [2, 90], [2, 94]]]]], [], ["loc", [null, [2, 67], [2, 96]]]]]]], ["content", "label", ["loc", [null, [2, 98], [2, 107]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-select", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 31], [4, 40]]]], "-", ["get", "name", ["loc", [null, [4, 45], [4, 49]]]]], [], ["loc", [null, [4, 23], [4, 50]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 56], [4, 60]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 69], [4, 76]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 93], [4, 112]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 129], [4, 148]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 155], [4, 160]]]]], [], []]], ["loc", [null, [4, 8], [4, 162]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]]]], [], []]], ["loc", [null, [10, 8], [10, 131]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/form-element/horizontal/select2", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/select2.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 76], [2, 85]]]], "-", ["get", "name", ["loc", [null, [2, 90], [2, 94]]]]], [], ["loc", [null, [2, 67], [2, 96]]]]]]], ["content", "label", ["loc", [null, [2, 98], [2, 107]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "select-2", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 30], [4, 39]]]], "-", ["get", "name", ["loc", [null, [4, 44], [4, 48]]]]], [], ["loc", [null, [4, 22], [4, 49]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 55], [4, 59]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 68], [4, 75]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 92], [4, 111]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 128], [4, 147]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 154], [4, 159]]]]], [], []], "searchEnabled", false], ["loc", [null, [4, 8], [4, 181]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/select2.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "select-2", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 24], [10, 28]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 37], [10, 44]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 61], [10, 80]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 97], [10, 116]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 123], [10, 128]]]]], [], []], "searchEnabled", false], ["loc", [null, [10, 8], [10, 150]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/horizontal/select2.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 76], [2, 85]]]], "-", ["get", "name", ["loc", [null, [2, 90], [2, 94]]]]], [], ["loc", [null, [2, 67], [2, 96]]]]]]], ["content", "label", ["loc", [null, [2, 98], [2, 107]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 33], [4, 42]]]], "-", ["get", "name", ["loc", [null, [4, 47], [4, 51]]]]], [], ["loc", [null, [4, 25], [4, 52]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 58], [4, 62]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 69], [4, 74]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 87], [4, 98]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 104], [4, 108]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 114], [4, 118]]]]], [], []]], ["loc", [null, [4, 8], [4, 120]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 73], [10, 77]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 83], [10, 87]]]]], [], []]], ["loc", [null, [10, 8], [10, 89]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ember-board/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "ember-board/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]]]], [], []]], ["loc", [null, [3, 8], [3, 57]]]], ["content", "label", ["loc", [null, [3, 58], [3, 67]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-board/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 47], [2, 56]]]], "-", ["get", "name", ["loc", [null, [2, 61], [2, 65]]]]], [], ["loc", [null, [2, 38], [2, 67]]]]]]], ["content", "label", ["loc", [null, [2, 69], [2, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-input", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 22], [4, 31]]]], "-", ["get", "name", ["loc", [null, [4, 36], [4, 40]]]]], [], ["loc", [null, [4, 14], [4, 41]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 47], [4, 51]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [4, 57], [4, 68]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 75], [4, 80]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 93], [4, 104]]]]], [], []]], ["loc", [null, [4, 0], [4, 106]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 47], [2, 56]]]], "-", ["get", "name", ["loc", [null, [2, 61], [2, 65]]]]], [], ["loc", [null, [2, 38], [2, 67]]]]]]], ["content", "label", ["loc", [null, [2, 69], [2, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 23], [4, 32]]]], "-", ["get", "name", ["loc", [null, [4, 37], [4, 41]]]]], [], ["loc", [null, [4, 15], [4, 42]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 61], [4, 68]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 85], [4, 104]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 121], [4, 140]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 147], [4, 152]]]]], [], []]], ["loc", [null, [4, 0], [4, 154]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 47], [2, 56]]]], "-", ["get", "name", ["loc", [null, [2, 61], [2, 65]]]]], [], ["loc", [null, [2, 38], [2, 67]]]]]]], ["content", "label", ["loc", [null, [2, 69], [2, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ember-board/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 25], [4, 34]]]], "-", ["get", "name", ["loc", [null, [4, 39], [4, 43]]]]], [], ["loc", [null, [4, 17], [4, 44]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 50], [4, 54]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 61], [4, 66]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 79], [4, 90]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 96], [4, 100]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 106], [4, 110]]]]], [], []]], ["loc", [null, [4, 0], [4, 112]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ember-board/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]]]], [], []]], ["loc", [null, [3, 8], [3, 57]]]], ["content", "label", ["loc", [null, [3, 58], [3, 67]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-board/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 47], [2, 56]]]], "-", ["get", "name", ["loc", [null, [2, 61], [2, 65]]]]], [], ["loc", [null, [2, 38], [2, 67]]]]]]], ["content", "label", ["loc", [null, [2, 69], [2, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ember-board/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-input", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 22], [4, 31]]]], "-", ["get", "name", ["loc", [null, [4, 36], [4, 40]]]]], [], ["loc", [null, [4, 14], [4, 41]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 47], [4, 51]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [4, 57], [4, 68]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 75], [4, 80]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 93], [4, 104]]]]], [], []]], ["loc", [null, [4, 0], [4, 106]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 47], [2, 56]]]], "-", ["get", "name", ["loc", [null, [2, 61], [2, 65]]]]], [], ["loc", [null, [2, 38], [2, 67]]]]]]], ["content", "label", ["loc", [null, [2, 69], [2, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 23], [4, 32]]]], "-", ["get", "name", ["loc", [null, [4, 37], [4, 41]]]]], [], ["loc", [null, [4, 15], [4, 42]]]], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 61], [4, 68]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 85], [4, 104]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 121], [4, 140]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 147], [4, 152]]]]], [], []]], ["loc", [null, [4, 0], [4, 154]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ember-board/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["subexpr", "concat", [["get", "elementId", ["loc", [null, [2, 47], [2, 56]]]], "-", ["get", "name", ["loc", [null, [2, 61], [2, 65]]]]], [], ["loc", [null, [2, 38], [2, 67]]]]]]], ["content", "label", ["loc", [null, [2, 69], [2, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ember-board/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "concat", [["get", "elementId", ["loc", [null, [4, 25], [4, 34]]]], "-", ["get", "name", ["loc", [null, [4, 39], [4, 43]]]]], [], ["loc", [null, [4, 17], [4, 44]]]], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 51], [4, 56]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 62], [4, 66]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 79], [4, 90]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 96], [4, 100]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 106], [4, 110]]]]], [], []]], ["loc", [null, [4, 0], [4, 112]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ember-board/templates/components/markdown-to-html", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-board/templates/components/markdown-to-html.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "html", ["loc", [null, [1, 0], [1, 8]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-board/torii-adapters/application', ['exports', 'ember', 'emberfire/torii-adapters/firebase'], function (exports, _ember, _emberfireToriiAdaptersFirebase) {
  exports['default'] = _emberfireToriiAdaptersFirebase['default'].extend({
    firebase: _ember['default'].inject.service()
  });
});
define('ember-board/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('ember-board/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-board';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("ember-board/app")["default"].create({"name":"ember-board","version":"0.0.0+54aba707"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-board.map