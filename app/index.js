function a0_0x1efe() {
  const _0x15572f = [
    "9jWlKnw",
    "user",
    "then",
    "log",
    "649jTVudu",
    "483670gRTtRZ",
    "queryToJSON",
    "query",
    "indexOf",
    "accounts",
    "clear",
    "401",
    "map",
    "energy",
    "325313owHUnx",
    "By\x20:\x20Widiskel",
    "recoverEnergy",
    "getSession",
    "claimDaily",
    "getMe",
    "filter",
    "Join\x20Channel\x20:\x20https://t.me/skeldrophunt",
    "energy_decrease_per_tap",
    ",\x20Query\x20Is\x20Expired,\x20Please\x20Get\x20New\x20Query",
    "USEAUTOTAP",
    "\x20Session\x20but\x20you\x20provide\x20",
    "198174UNAYrX",
    "launchParamToQuery",
    "BOT\x20STARTED",
    "18404eVmYzC",
    "Successfully\x20get\x20new\x20query",
    "initWebView",
    "Application\x20Started",
    "max_energy",
    "energy_recovery_per_second",
    "Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date",
    "Tsubasa\x20Rivalz\x20BOT",
    "firstName",
    "levelUpEnergy",
    "error",
    "747nySnaB",
    "length",
    "total_coins",
    "tasks",
    "3069615ojBjxi",
    "Follow\x20On\x20:\x20https://github.com/Widiskel",
    "init",
    "1559916rcJebO",
    "USEAUTOUPGRADEBOOST",
    "accounts/",
    "showSkelLogo",
    ",\x20Query\x20Is\x20Expired,\x20Getting\x20New\x20Query\x20in\x205\x20Seconds",
    "all",
    "type",
    "client",
    "35ZIDgRd",
    "last_name",
    "floor",
    "delay",
    "Error\x20:\x20",
    "levelUpCard",
    "random",
    "\x20Processing\x20Complete,\x20Restarting\x20in\x20",
    "disconnect",
    "sessions",
    "tap",
    "value",
    "message",
    "startTask",
    "CUSTOMDELAY",
    "USEAUTOCOMPLETEMISSIONS",
    "3574664sgZEPi",
    "resolvePeer",
    "catch",
    "\x20Proxy",
    "stats",
    "useSession",
    "clearInfo",
    ",\x20Retrying\x20after\x205\x20Seconds",
    "info",
    "lastName",
    "status",
    "session",
    "push",
  ];
  a0_0x1efe = function () {
    return _0x15572f;
  };
  return a0_0x1efe();
}
(function (_0x451bc8, _0x6779ad) {
  const _0x3c1512 = a0_0x404e,
    _0x4f5cf4 = _0x451bc8();
  while (!![]) {
    try {
      const _0x2115c4 =
        -parseInt(_0x3c1512(0x19f)) / 0x1 +
        -parseInt(_0x3c1512(0x16c)) / 0x2 +
        (parseInt(_0x3c1512(0x165)) / 0x3) *
          (-parseInt(_0x3c1512(0x1ae)) / 0x4) +
        -parseInt(_0x3c1512(0x169)) / 0x5 +
        (parseInt(_0x3c1512(0x1ab)) / 0x6) *
          (parseInt(_0x3c1512(0x174)) / 0x7) +
        (-parseInt(_0x3c1512(0x184)) / 0x8) *
          (-parseInt(_0x3c1512(0x191)) / 0x9) +
        (-parseInt(_0x3c1512(0x196)) / 0xa) *
          (-parseInt(_0x3c1512(0x195)) / 0xb);
      if (_0x2115c4 === _0x6779ad) break;
      else _0x4f5cf4["push"](_0x4f5cf4["shift"]());
    } catch (_0x3f0fa2) {
      _0x4f5cf4["push"](_0x4f5cf4["shift"]());
    }
  }
})(a0_0x1efe, 0x92ad4);
import { Config } from "./config/config.js";
import { proxyList } from "./config/proxy_list.js";
import { Core } from "./src/core/core.js";
import { Telegram } from "./src/core/telegram.js";
import { Helper } from "./src/utils/helper.js";
import a0_0x2bfd84 from "./src/utils/logger.js";
import a0_0x15ab00 from "./src/utils/twist.js";
async function operation(_0x4c218c, _0x394a6d, _0x37ad31, _0x42a401) {
  const _0x39a25f = a0_0x404e;
  try {
    const _0x5b9cef = Config[_0x39a25f(0x1a9)] ?? !![],
      _0x5f0fe3 = Config[_0x39a25f(0x183)] ?? !![],
      _0xff54e3 = Config[_0x39a25f(0x16d)] ?? !![],
      _0x400643 = Config["USEAUTOLEVELUPRANDOMCARD"] ?? !![],
      _0x2ab6da = Config[_0x39a25f(0x182)] ?? undefined,
      _0x343704 = new Core(_0x4c218c, _0x394a6d, _0x37ad31, _0x42a401);
    await _0x343704["getUserInfo"](!![]), await _0x343704[_0x39a25f(0x1a3)]();
    if (_0x5b9cef) {
      _0x343704[_0x39a25f(0x192)]["energy"] >=
        _0x343704[_0x39a25f(0x192)][_0x39a25f(0x15e)] -
          Helper[_0x39a25f(0x17a)](0x64, 0x3e8) &&
        (await _0x343704[_0x39a25f(0x17e)](
          Math[_0x39a25f(0x176)](
            _0x343704[_0x39a25f(0x192)][_0x39a25f(0x19e)] /
              _0x343704[_0x39a25f(0x188)][_0x39a25f(0x1a7)]
          )
        ));
      await _0x343704[_0x39a25f(0x1a1)]();
      if (
        _0x343704[_0x39a25f(0x192)][_0x39a25f(0x19e)] /
          _0x343704[_0x39a25f(0x188)][_0x39a25f(0x1a7)] >
        0x0
      )
        await _0x343704[_0x39a25f(0x17e)](
          Math[_0x39a25f(0x176)](
            _0x343704[_0x39a25f(0x192)][_0x39a25f(0x19e)] /
              _0x343704[_0x39a25f(0x188)][_0x39a25f(0x1a7)]
          )
        );
    }
    if (_0x5f0fe3)
      for (const _0x4b33e3 of _0x343704[_0x39a25f(0x168)]) {
        if (_0x4b33e3["id"] != 0x5)
          _0x4b33e3[_0x39a25f(0x18e)] == 0x0
            ? await _0x343704[_0x39a25f(0x181)](_0x4b33e3)
            : _0x4b33e3[_0x39a25f(0x18e)] == 0x1 &&
              (await _0x343704["claimTask"](_0x4b33e3));
      }
    _0xff54e3 &&
      (await _0x343704["levelUpTap"](), await _0x343704[_0x39a25f(0x163)]());
    if (_0x400643) {
      let _0x1f2558 = _0x343704[_0x39a25f(0x192)][_0x39a25f(0x167)];
      const _0x3f545a = _0x343704["card"][_0x39a25f(0x1a5)](
        (_0xc035e0) => _0xc035e0["unlocked"] === !![]
      );
      if (_0x3f545a[_0x39a25f(0x166)] === 0x0) return;
      let _0x1508d9 = 0x0;
      while (_0x1508d9 < 0x5) {
        try {
          const _0x54342a = Math[_0x39a25f(0x176)](
              Math[_0x39a25f(0x17a)]() * _0x3f545a["length"]
            ),
            _0x5524e7 = _0x3f545a[_0x54342a],
            _0x52a63f = _0x5524e7["cost"];
          if (_0x1f2558 >= _0x52a63f) {
            await _0x343704[_0x39a25f(0x179)](_0x5524e7),
              (_0x343704[_0x39a25f(0x192)][_0x39a25f(0x167)] -= _0x52a63f);
            break;
          }
          _0x1508d9++;
        } catch (_0x34aded) {
          break;
        }
      }
    }
    const _0x344239 = Helper[_0x39a25f(0x17a)](0x2710, 0xea60);
    let _0x68eff8;
    _0x2ab6da
      ? (_0x68eff8 = 0x3e8 * _0x2ab6da)
      : (_0x68eff8 =
          _0x344239 +
          (_0x343704[_0x39a25f(0x192)][_0x39a25f(0x15e)] /
            _0x343704[_0x39a25f(0x188)][_0x39a25f(0x15f)]) *
            0x3e8),
      await Helper[_0x39a25f(0x177)](
        _0x68eff8,
        _0x4c218c,
        "Account\x20" +
          _0x4c218c["id"] +
          _0x39a25f(0x17b) +
          Helper["msToTime"](_0x68eff8),
        _0x343704
      ),
      await operation(_0x4c218c, _0x394a6d, _0x37ad31, _0x42a401);
  } catch (_0x453689) {
    if (_0x453689[_0x39a25f(0x180)]["includes"](_0x39a25f(0x19c))) {
      if (_0x4c218c["type"] == _0x39a25f(0x198))
        await Helper[_0x39a25f(0x177)](
          0x3e8,
          _0x4c218c,
          _0x39a25f(0x178) + _0x453689[_0x39a25f(0x180)] + _0x39a25f(0x1a8)
        );
      else {
        await Helper[_0x39a25f(0x177)](
          0x1388,
          _0x4c218c,
          "Error\x20:\x20" + _0x453689[_0x39a25f(0x180)] + _0x39a25f(0x170)
        );
        const _0x9908be = new Telegram();
        await _0x9908be[_0x39a25f(0x189)](
          _0x4c218c[_0x39a25f(0x19a)],
          _0x42a401
        );
        const _0x2ac5b5 = await _0x9908be[_0x39a25f(0x173)][_0x39a25f(0x1a4)]();
        (_0x2ac5b5[_0x39a25f(0x172)] = _0x39a25f(0x17d)),
          (_0x2ac5b5[_0x39a25f(0x19a)] = _0x4c218c[_0x39a25f(0x19a)]),
          (_0x2ac5b5["id"] = _0x2ac5b5["id"][_0x39a25f(0x17f)]);
        const _0x4745fb = await _0x9908be[_0x39a25f(0x185)]()
            [_0x39a25f(0x193)](async () => {
              return await _0x9908be["initWebView"]();
            })
            [_0x39a25f(0x186)]((_0x5304dd) => {
              throw _0x5304dd;
            }),
          _0x13ada4 = Helper[_0x39a25f(0x197)](_0x4745fb);
        await _0x9908be["disconnect"](),
          await Helper[_0x39a25f(0x177)](0x1388, _0x2ac5b5, _0x39a25f(0x15b)),
          await operation(_0x2ac5b5, _0x4745fb, _0x13ada4, _0x42a401);
      }
    } else
      await Helper[_0x39a25f(0x177)](
        0x1388,
        _0x4c218c,
        _0x39a25f(0x178) + _0x453689[_0x39a25f(0x180)] + _0x39a25f(0x18b)
      ),
        await operation(_0x4c218c, _0x394a6d, _0x37ad31, _0x42a401);
  }
}
function a0_0x404e(_0x30fed2, _0x147adb) {
  const _0x1efe7e = a0_0x1efe();
  return (
    (a0_0x404e = function (_0x404e64, _0x2fe827) {
      _0x404e64 = _0x404e64 - 0x15b;
      let _0x4fca7a = _0x1efe7e[_0x404e64];
      return _0x4fca7a;
    }),
    a0_0x404e(_0x30fed2, _0x147adb)
  );
}
let init = ![];
async function startBot() {
  return new Promise(async (_0x3b0427, _0x58e2ee) => {
    const _0x29938c = a0_0x404e;
    try {
      a0_0x2bfd84[_0x29938c(0x18c)](_0x29938c(0x1ad));
      const _0x52ee12 = await new Telegram();
      init == ![] && (await _0x52ee12[_0x29938c(0x16b)](), (init = !![]));
      const _0x65b8b8 = Helper[_0x29938c(0x1a2)]("accounts"),
        _0x3c5fd0 = [];
      proxyList["length"] > 0x0 &&
        _0x65b8b8[_0x29938c(0x166)] != proxyList[_0x29938c(0x166)] &&
        _0x58e2ee(
          "You\x20have\x20" +
            _0x65b8b8[_0x29938c(0x166)] +
            _0x29938c(0x1aa) +
            proxyList[_0x29938c(0x166)] +
            _0x29938c(0x187)
        );
      for (const _0xb6ddfb of _0x65b8b8) {
        const _0x56dc8d = _0x65b8b8[_0x29938c(0x199)](_0xb6ddfb),
          _0x2c9718 =
            proxyList[_0x29938c(0x166)] > 0x0
              ? proxyList[_0x56dc8d]
              : undefined;
        if (!_0xb6ddfb["includes"](_0x29938c(0x198))) {
          await _0x52ee12["useSession"](
            _0x29938c(0x16e) + _0xb6ddfb,
            _0x2c9718
          ),
            (_0x52ee12[_0x29938c(0x18f)] = _0xb6ddfb);
          const _0x417484 = await _0x52ee12[_0x29938c(0x173)][
            _0x29938c(0x1a4)
          ]();
          (_0x417484[_0x29938c(0x172)] = _0x29938c(0x17d)),
            (_0x417484[_0x29938c(0x19a)] = _0x29938c(0x16e) + _0xb6ddfb),
            (_0x417484["id"] = _0x417484["id"][_0x29938c(0x17f)]);
          const _0x164227 = await _0x52ee12[_0x29938c(0x185)]()
              ["then"](async () => {
                const _0x307912 = _0x29938c;
                return await _0x52ee12[_0x307912(0x15c)]();
              })
              [_0x29938c(0x186)]((_0x4a2b2d) => {
                throw _0x4a2b2d;
              }),
            _0x3b4b16 = Helper[_0x29938c(0x197)](_0x164227);
          await _0x52ee12[_0x29938c(0x17c)](),
            _0x3c5fd0[_0x29938c(0x190)]([
              _0x417484,
              _0x164227,
              _0x3b4b16,
              _0x2c9718,
            ]);
        } else {
          let _0x547f49 = Helper["readQueryFile"](
              _0x29938c(0x16e) + _0xb6ddfb + "/query.txt"
            ),
            _0xfaf35b = Helper[_0x29938c(0x197)](_0x547f49);
          !_0xfaf35b[_0x29938c(0x192)] &&
            ((_0xfaf35b = await Helper[_0x29938c(0x197)](
              await Helper[_0x29938c(0x1ac)](_0x547f49)
            )),
            (_0x547f49 = await Helper["launchParamToQuery"](_0x547f49)));
          const _0x3bb059 = _0xfaf35b[_0x29938c(0x192)];
          (_0x3bb059[_0x29938c(0x172)] = _0x29938c(0x198)),
            (_0x3bb059[_0x29938c(0x162)] = _0x3bb059["first_name"]),
            (_0x3bb059[_0x29938c(0x18d)] = _0x3bb059[_0x29938c(0x175)]),
            _0x3c5fd0[_0x29938c(0x190)]([
              _0x3bb059,
              _0x547f49,
              _0xfaf35b,
              _0x2c9718,
            ]);
        }
      }
      const _0x479355 = _0x3c5fd0[_0x29938c(0x19d)](async (_0x52726a) => {
        await operation(
          _0x52726a[0x0],
          _0x52726a[0x1],
          _0x52726a[0x2],
          _0x52726a[0x3]
        );
      });
      await Promise[_0x29938c(0x171)](_0x479355), _0x3b0427();
    } catch (_0x3b2aa0) {
      a0_0x2bfd84[_0x29938c(0x18c)]("BOT\x20STOPPED"),
        a0_0x2bfd84[_0x29938c(0x164)](JSON["stringify"](_0x3b2aa0)),
        _0x58e2ee(_0x3b2aa0);
    }
  });
}
(async () => {
  const _0x5abc29 = a0_0x404e;
  try {
    a0_0x2bfd84["clear"](),
      a0_0x2bfd84[_0x5abc29(0x18c)](""),
      a0_0x2bfd84[_0x5abc29(0x18c)](_0x5abc29(0x15d)),
      console["log"](_0x5abc29(0x161)),
      console["log"](),
      console[_0x5abc29(0x194)](_0x5abc29(0x1a0)),
      console[_0x5abc29(0x194)](_0x5abc29(0x16a)),
      console[_0x5abc29(0x194)](_0x5abc29(0x1a6)),
      console[_0x5abc29(0x194)](_0x5abc29(0x160)),
      console[_0x5abc29(0x194)](),
      console[_0x5abc29(0x194)](),
      Helper[_0x5abc29(0x16f)](),
      await startBot();
  } catch (_0x21a766) {
    await a0_0x15ab00[_0x5abc29(0x19b)](),
      await a0_0x15ab00[_0x5abc29(0x18a)](),
      console[_0x5abc29(0x194)](
        "Error\x20During\x20executing\x20bot",
        _0x21a766
      ),
      await startBot();
  }
})();
