[![CircleCI](https://circleci.com/gh/grafana/piechart-panel.svg?style=svg)](https://circleci.com/gh/grafana/piechart-panel)
[![David Dependancy Status](https://david-dm.org/grafana/piechart-panel.svg)](https://david-dm.org/grafana/piechart-panel)
[![David Dev Dependency Status](https://david-dm.org/grafana/piechart-panel/dev-status.svg)](https://david-dm.org/grafana/piechart-panel/?type=dev)

# **Notice:** This plugin is deprecated

As of [Grafana 8.0](https://grafana.com/docs/grafana/latest/whatsnew/whats-new-in-v8-0/#whats-new-in-grafana-v80) Pie chart panel is included with Grafana. Please refer to the [Pie chart panel](<(https://grafana.com/docs/grafana/latest/visualizations/pie-chart-panel/)>) documentation for more information.

# Installation

Use the new grafana-cli tool to install piechart-panel from the commandline:

```
grafana-cli plugins install grafana-piechart-panel
```

The plugin will be installed into your Grafana plugins directory; the default is /var/lib/grafana/plugins if you installed the Grafana package.

More instructions on the Grafana CLI tool can be found in [Grafana CLI](https://grafana.com/docs/grafana/latest/administration/cli/).

You must have Grafana 3.0 or newer installed to run this plugin. You can get it here : http://grafana.org/download/builds.html

## Alternative installation methods

### Download latest zip

```BASH
wget -nv https://grafana.com/api/plugins/grafana-piechart-panel/versions/latest/download -O /tmp/grafana-piechart-panel.zip
```

Extract and move into place

```BASH
unzip -q /tmp/grafana-piechart-panel.zip -d /tmp
mv /tmp/grafana-piechart-panel-* /var/lib/grafana/plugins/grafana-piechart-panel
sudo service grafana-server restart
```

### Git clone

You can clone this repo directly into your plugins directory.

Afterwards restart grafana-server and the plugin should be automatically detected and used.

```
git clone https://github.com/grafana/piechart-panel.git --branch release-1.3.8
sudo service grafana-server restart
```

### Clone into a directory of your choice

If the plugin is cloned to a directory that is not the default plugins directory, then you need to edit your grafana.ini config file (default location is at /etc/grafana/grafana.ini) and add this:

```ini
[plugin.piechart]
path = /home/your/clone/dir/piechart-panel
```

Note that if you clone it into the Grafana plugins directory, then you do not need to add the above config option. That is only
if you want to place the plugin in a directory outside the standard plugins directory. Make sure that grafana-server
has read access to the directory.
