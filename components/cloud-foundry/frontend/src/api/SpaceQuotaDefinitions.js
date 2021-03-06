/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.SpaceQuotaDefinitions', new SpaceQuotaDefinitionsApi($http));
  }

  function SpaceQuotaDefinitionsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(SpaceQuotaDefinitionsApi.prototype, {

    /*
    * Associate Space with the Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/associate_space_with_the_space_quota_definition.html
    */
    AssociateSpaceWithSpaceQuotaDefinition: function (guid, space_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions/' + guid + '/spaces/' + space_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Creating a Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/creating_a_space_quota_definition.html
    */
    CreateSpaceQuotaDefinition: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Delete a Particular Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/delete_a_particular_space_quota_definition.html
    */
    DeleteSpaceQuotaDefinition: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions/' + guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Space Quota Definitions
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/list_all_space_quota_definitions.html
    */
    ListAllSpaceQuotaDefinitions: function (params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Spaces for the Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/list_all_spaces_for_the_space_quota_definition.html
    */
    ListAllSpacesForSpaceQuotaDefinition: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions/' + guid + '/spaces';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Space from the Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/remove_space_from_the_space_quota_definition.html
    */
    RemoveSpaceFromSpaceQuotaDefinition: function (guid, space_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions/' + guid + '/spaces/' + space_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Retrieve a Particular Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/retrieve_a_particular_space_quota_definition.html
    */
    RetrieveSpaceQuotaDefinition: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Updating a Space Quota Definition
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/space_quota_definitions/updating_a_space_quota_definition.html
    */
    UpdateSpaceQuotaDefinition: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/space_quota_definitions/' + guid + '';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
