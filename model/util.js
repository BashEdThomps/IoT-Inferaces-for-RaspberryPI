/*
  Ash's RaspberryPI IO Remote.
  email: ashthompson06@gmail.command
  repo: https://github.com/BashEdThomps/IoT-RaspberryPI.git

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var Constants = require('./constants');

// HTTP Helpers

module.exports.sendHttpError = function (res, msg)
{
  if (msg) console.log(msg);
  res.status(Constants.HTTP_ERROR);
  res.send();
};

module.exports.sendHttpOK = function(res, msg)
{
  if (msg) console.log(msg);
  res.status(Constants.HTTP_OK);
  res.send();
};

module.exports.sendHttpNotFound = function(res, msg)
{
  if (msg) console.log(msg);
  res.status(Constants.HTTP_NOT_FOUND);
  res.send();
};

module.exports.sendHttpJson = function(res,json,msg)
{
  if (msg) console.log(msg);
  res.status(Constants.HTTP_OK);
  res.json(JSON.stringify(json));
};

module.exports.sendHttpUnauthorised = function(res, msg)
{
  if (msg) console.log(msg);
  res.status(Constants.HTTP_UNAUTHORISED);
  res.send();
};
