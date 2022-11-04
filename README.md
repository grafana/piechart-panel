# **Notice:** This plugin is deprecated

[![Marketplace](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=marketplace&prefix=v&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22grafana-piechart-panel%22%29%5D.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/grafana-piechart-panel)
[![Downloads](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=downloads&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22grafana-piechart-panel%22%29%5D.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/grafana-piechart-panel)
[![License](https://img.shields.io/github/license/grafana/piechart-panel)](LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/grafana/piechart-panel/badge.svg)](https://snyk.io/test/github/grafana/piechart-panel)
[![Build Status](https://drone.grafana.net/api/badges/grafana/piechart-panel/status.svg)](https://drone.grafana.net/grafana/piechart-panel)

As of [Grafana 8.0](https://grafana.com/docs/grafana/latest/whatsnew/whats-new-in-v8-0/#whats-new-in-grafana-v80) Pie chart panel is included with Grafana. Please refer to the [Pie chart panel](https://grafana.com/docs/grafana/latest/visualizations/pie-chart-panel/) documentation for more information.

## Installation

Use the new grafana-cli tool to install piechart-panel from the commandline:

```SHELL
grafana-cli plugins install grafana-piechart-panel
```

The plugin will be installed into your Grafana plugins directory; the default is /var/lib/grafana/plugins if you installed the Grafana package.

More instructions on the Grafana CLI tool can be found in [Grafana CLI](https://grafana.com/docs/grafana/latest/administration/cli/).

You must have Grafana 4.6.5 or newer installed to run this plugin. You can get it here: <https://grafana.com/grafana/download>

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

```SHELL
git clone https://github.com/grafana/piechart-panel.git --branch release-1.6.2
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
