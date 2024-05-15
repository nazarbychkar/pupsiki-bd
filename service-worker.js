/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "145ea8a3c38eaa6b757dfce6fe416212"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.b59c5520.css",
    "revision": "f046de80a1d7aabadf7eb4b4aee8b403"
  },
  {
    "url": "assets/img/connection.1ad38df7.png",
    "revision": "1ad38df7e28e8c445b8b80b0bd23d34f"
  },
  {
    "url": "assets/img/get_user_id_invalid_id.00414ee0.png",
    "revision": "00414ee08f02bc90cbfb795ef8e8f90a"
  },
  {
    "url": "assets/img/get_user_id_no_user_with_such_id.5efe5a32.png",
    "revision": "5efe5a327bb17b678af57338403c5506"
  },
  {
    "url": "assets/img/get_user_id.7a229d99.png",
    "revision": "7a229d99b50cdb93a3d7089e70984904"
  },
  {
    "url": "assets/img/get_users.9b277dd0.png",
    "revision": "9b277dd0487d2cff2ab9642adfb26220"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_add_invalid_amount_of_keys.3a49fb3a.png",
    "revision": "3a49fb3a4cb06a93d8a62101a4cf344b"
  },
  {
    "url": "assets/img/user_add_test.d2099b4f.png",
    "revision": "d2099b4f1d272b9b55daf76502eff127"
  },
  {
    "url": "assets/img/user_add_to_project_test.7ebf53f1.png",
    "revision": "7ebf53f188e83961a5845f6793252a2f"
  },
  {
    "url": "assets/img/user_add_to_project.575f9a1f.png",
    "revision": "575f9a1f73bd6988896e10f627f9f28b"
  },
  {
    "url": "assets/img/user_add.8e3982e3.png",
    "revision": "8e3982e3c586d1dce8e7b741e93723ec"
  },
  {
    "url": "assets/img/user_ban_test.32515b86.png",
    "revision": "32515b862c4af6ee182821b1c5335602"
  },
  {
    "url": "assets/img/user_ban.1ca08ae1.png",
    "revision": "1ca08ae10cd800da3a21b9396c22335b"
  },
  {
    "url": "assets/img/user_delete_id_invalid_user_id.8e9892a9.png",
    "revision": "8e9892a9c6c442623d5a9c6634d3862d"
  },
  {
    "url": "assets/img/user_delete_id_nothing_to_delete.24a11d06.png",
    "revision": "24a11d06f97f5997320c3100f0fce5e1"
  },
  {
    "url": "assets/img/user_delete_id_test.962bd537.png",
    "revision": "962bd53751196d64856bab9377990c9f"
  },
  {
    "url": "assets/img/user_delete_id.356c3765.png",
    "revision": "356c3765a49b69bc42dd4fd654cc1684"
  },
  {
    "url": "assets/img/user_delete_of_project_test.25fe4d24.png",
    "revision": "25fe4d24d4173a10e83f2b1c16323344"
  },
  {
    "url": "assets/img/user_delete_of_project.7e657c8d.png",
    "revision": "7e657c8d5769cd913b53a08a802063e5"
  },
  {
    "url": "assets/img/user_unban_test.a25756a9.png",
    "revision": "a25756a963394eb8b23c00469545bcb9"
  },
  {
    "url": "assets/img/user_unban.927fee25.png",
    "revision": "927fee25c1d4ecbb8f8f4135803429b1"
  },
  {
    "url": "assets/img/user_update_invalid_amount_of_keys.9d102a9f.png",
    "revision": "9d102a9f65c795cdc17d1dbaadffbeb7"
  },
  {
    "url": "assets/img/user_update_invalid_user_id.4c592470.png",
    "revision": "4c592470b232fff98619ac02c48ae643"
  },
  {
    "url": "assets/img/user_update_nothing_to_update.3cdf0d0f.png",
    "revision": "3cdf0d0f34620ea0173650e0ae55fccb"
  },
  {
    "url": "assets/img/user_update_test.833fbfa9.png",
    "revision": "833fbfa9c63b0de17d5ef322fa3ef7d6"
  },
  {
    "url": "assets/img/user_update.3aedc1ae.png",
    "revision": "3aedc1aeb798b55d5e13503be06a03ce"
  },
  {
    "url": "assets/js/10.ac3a37a1.js",
    "revision": "19b22c6b5f0be6e6fe5e8f33e41cf3fb"
  },
  {
    "url": "assets/js/11.cbd2f41a.js",
    "revision": "903457a89d869b18f780a43212822a58"
  },
  {
    "url": "assets/js/12.eb6bb228.js",
    "revision": "65a2e1fa4b559a4720b8b27ba7bc418e"
  },
  {
    "url": "assets/js/13.46e74c44.js",
    "revision": "2b2735cda013d5ecaf8b25d86be2a746"
  },
  {
    "url": "assets/js/14.c3cadbf3.js",
    "revision": "d182eab7559fd250cb9227329630e6d0"
  },
  {
    "url": "assets/js/15.72117a23.js",
    "revision": "f9f2dc2102e68bbc8f2bf9024edcd02b"
  },
  {
    "url": "assets/js/16.1cb0f245.js",
    "revision": "fe3770c621d6993c9358cfa112795a03"
  },
  {
    "url": "assets/js/17.75d9242e.js",
    "revision": "98b5e8a31fe3f5d47aade048debc1706"
  },
  {
    "url": "assets/js/18.cb5807d4.js",
    "revision": "dd644681c198595deb3d223b78e528f2"
  },
  {
    "url": "assets/js/19.c1805ae7.js",
    "revision": "b57b309a2d23a8cfc824b66846234f1b"
  },
  {
    "url": "assets/js/2.d8c7e522.js",
    "revision": "60351b26b3b5be42f553ef327695427a"
  },
  {
    "url": "assets/js/20.b4e50094.js",
    "revision": "2a4a32cc1dd432e451cd6900a6a3d935"
  },
  {
    "url": "assets/js/21.424330ae.js",
    "revision": "46a754c0d5184d717234adc8eb9786d0"
  },
  {
    "url": "assets/js/22.13ae9095.js",
    "revision": "5aaa3a4ef63688f4eadf51418363ae3e"
  },
  {
    "url": "assets/js/23.5275faf2.js",
    "revision": "9a3a4892f37f247f0e518e9d8fc59474"
  },
  {
    "url": "assets/js/24.83199456.js",
    "revision": "33789d70c160b3b488a03c1e9c326758"
  },
  {
    "url": "assets/js/26.7f8c4224.js",
    "revision": "c406c43ebc25fe0c1bdf11ecd77981ff"
  },
  {
    "url": "assets/js/3.7ff4ffa3.js",
    "revision": "0526f03af0736f5c7a44d8ea081e662a"
  },
  {
    "url": "assets/js/4.5fac780c.js",
    "revision": "cc1c7382744c32519f906a63a7cb099c"
  },
  {
    "url": "assets/js/5.958a62e3.js",
    "revision": "3509a6707b8b1661ea7e871bccbc616f"
  },
  {
    "url": "assets/js/6.e7df596e.js",
    "revision": "6e0cbb5fd8900e4eb14edc4ba7a429bd"
  },
  {
    "url": "assets/js/7.bbb6737c.js",
    "revision": "0d787f00a26309ef073b5c160ab5c2d3"
  },
  {
    "url": "assets/js/8.312f075f.js",
    "revision": "0f153f3018d3cab1087bae6d31e58cc6"
  },
  {
    "url": "assets/js/9.c5f1136d.js",
    "revision": "8ade9b65d0411edeea8ef05eb8af83cd"
  },
  {
    "url": "assets/js/app.8a93f70c.js",
    "revision": "5e8f893052c763c1f2f33e0b50f182f1"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5bda5e4c605f0e34e1b5051e08e38e8c"
  },
  {
    "url": "design/index.html",
    "revision": "15ec6eb12ba8fca510c5081e43382e69"
  },
  {
    "url": "index.html",
    "revision": "a78d189ad0a574e9a087858a51982aad"
  },
  {
    "url": "intro/index.html",
    "revision": "4762de3b63d8d6c53436b2438ddd1671"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "39b3ee455c939add2ee1b7692f977402"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6a6f485a808811c34992a579d4ace843"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "285f70a33eba5a8d4a422623ede6e3c1"
  },
  {
    "url": "software/index.html",
    "revision": "f8b4b78f214d04891309580d91d3144a"
  },
  {
    "url": "test/index.html",
    "revision": "fa585f302612bdb81b10726d15c73164"
  },
  {
    "url": "use cases/index.html",
    "revision": "bf6d09f2b1abdd74adca798bfb225bec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
