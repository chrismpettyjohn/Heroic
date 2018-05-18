exports.up = (knex) => {
  return knex.schema.createTable('cms_settings', (table) => {
    table.increments('id').primary();
    table.string('site_name');
    table.string('site_desc');
    table.string('site_link');
    table.string('server_ip');
    table.string('server_port');
    table.string('findretros_user');
    table.enum('findretros_enabled', ['true', 'false']);
    table.enum('store_enabled', ['true', 'false'];
    table.string('paypal_key');
    table.enum('paypal_mode', ['sandbox', 'client']);
    table.string('swf_base');
    table.string('swf_gamedata');
  }
};
