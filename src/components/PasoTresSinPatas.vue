<template>
  <div>
    <section>
      <!-- TAZAS -->
      <carousel :per-page="7" paginationActiveColor="#000" :perPageCustom="[[320, 1],[480,1],[640,2],[960,3],[1024,3],[1200,4],[1600,6]]">
        <slide >
          <div class="producto_container" >
            <div class="producto_imagen">
              <img src alt />
            </div>
            <div class="producto_meta">
              <input
                type="radio"
                name="tazaOmate"
                id="nogracias"
                value="No gracias"
                @change="restarPrecio"
              />
              <label for="tazaOmate0">No, gracias</label>
            </div>
          </div>
        </slide>
        <slide v-for="taza in tazas" :key="taza.id">
          <div class="producto_container">
            <div class="producto_imagen">
              <img :src="taza.urlImg" alt />
            </div>
            <div class="producto_meta">
              <input
                type="radio"
                name="tazaOmate"
                :id="'taza-'+taza.id"
                :value="taza.tazaDesc"
                @change="plus"
              />
              <label :for="'taza-'+taza.id">{{ taza.tazaDesc }}</label>
            </div>
          </div>
        </slide>
      </carousel>
      <!-- Mates -->
      <carousel :per-page="7" :perPageCustom="[[320, 1],[480,1],[640,2],[960,3],[1024,3],[1200,4],[1600,6]]">
        <slide>
          <div class="producto_container">
            <div class="producto_imagen">
              <img src alt />
            </div>
            <div class="producto_meta">
              <input
                type="radio"
                name="tazaOmate"
                id="nogracias"
                value="No gracias"
                @change="restarPrecio"
              />
              <label for="tazaOmate0">No, gracias</label>
            </div>
          </div>
        </slide>
        <slide v-for="mate in mates" :key="mate.id">
          <div class="producto_container">
            <div class="producto_imagen">
              <img :src="mate.urlImg" alt />
            </div>
            <div class="producto_meta">
              <input
                type="radio"
                name="tazaOmate"
                :id="'mate-'+mate.id"
                :value="mate.MateDesc"
                @change="plus"
              />
              <label :for="'mate-'+mate.id">{{ mate.MateDesc }}</label>
            </div>
          </div>
        </slide>
      </carousel>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tazas: [
        {
          id:1,
          urlImg:
            "https://lh3.googleusercontent.com/JDpEpA0zG-KusmGuhD3AbQ5ol9NPj3IYt1fqST6offVwSOuZMfamNTfjuYw_Bs9ydcvSB8msGMgCbv6K1VCFCBqfZW5jCB7h0W84e-ONLFjUv6Au08ApDYqXstRH=w260",
          tazaDesc: "Taza 1 - Papa sos mi Rockstar."
        },
        {
          id:2,
          urlImg:
            "https://lh4.googleusercontent.com/twJq3K521zogmJhN-onoFSXqDIzl7gk6EeMeNZYrMO86vgaO7VA5AZ9sDoUZW4h7nFwzEnkWoa32Sj5cyMG5i6JM_0xiL63KKW9iyQMorABy4mYnCg9LyesdoATs=w260",
          tazaDesc: "Taza 2 - Mi padre es Mágico, siempre que lo llamo aparece."
        },
        {
          id:3,
          urlImg:
            "https://lh4.googleusercontent.com/ip9BxDySittLrzGsTLUpm9V3O6UUsPHF7iRRXARrgpWOQpS9jXrO8vnAm_tYdmht4NYa6uXv6tpLeCMXIVNdK9IfASGj1esYemUu3Yn9w0LxA9qsX6Mm5t2H_HS9=w260",
          tazaDesc: "Taza 3 - Eres el mejor padre del mundo."
        },
        {
          id:4,
          urlImg:
            "https://lh4.googleusercontent.com/jDWr2bHSgvAwUNE-eom18qYVRt0gD3vhhwU5Y-JXb5dnHZFTWjNugSTSIveyViJnJt7xlui3X9UjxqS0sicicsI0U80ho1oMnyG5j0zTjh_0eOD0y3_xWSiAQwTE=w260",
          tazaDesc: "Taza 4 - Papá te quiero mucho."
        },
        {
          id:5,
          urlImg:
            "https://lh5.googleusercontent.com/qRxKcv24H_vxScH0AJSjk4ZSZLK9AQvwQRK63S2IOi50KZ4i8tAWXu0sI-qoHLC-sSrMH-TXFMaqeD3zs44fHiyn5skp1VIMG-hs2rWiwVusoW7V5rhBY94DqaUK=w260",
          tazaDesc: "Taza 5 - Para el mejor papa del mundo."
        },
        {
          id:6,
          urlImg:
            "https://lh6.googleusercontent.com/TuB8Pia2Kftx4Sl-9s0dRC81KA86mjWzyU7dSX4snQDXYaDSWowStywAYwu3E0dUWxPuM2cuxkmV5FQUalRRF4brwhgzJqtrfjsrMkchxxxvnIffhYXHgk-Z-IdH=w260",
          tazaDesc: "Taza 6 - Mi papá el mejor."
        },
        {
          id:7,
          urlImg:
            "https://lh3.googleusercontent.com/qZHQvqOOMtoSLCTwAM0i8nc77QO2troqlWSK4PESzQ2gcKCpd2IwcxTvqPkANBd7Y0BE4qgATP0x0nYNMhxuz5aOEQjwcsQI1YO6qpgVYAMaEr8hFrbZedmRH09C=w260",
          tazaDesc: "Taza 7 - Papá estar en casa con vos, es el mejor plan."
        },
        {
          id:8,
          urlImg:
            "https://lh5.googleusercontent.com/j0TrqxLxVs_wB9aE3hm-3V9CSEvb7r7RtBbON2bApn69M90EOHrhnucEthCPwYgQeiTio93uvWfYXAKljXK3CMGyTPrrLwZbAwB_6miIRBQ_CGBU0y76vqATtnx4=w260",
          tazaDesc: "Taza 8 - Super papá."
        },
        {
          id:9,
          urlImg:
            "https://lh3.googleusercontent.com/2vc3SdVVtCBZOrTjNhnoxR4WB-uMK7--V_V49tBgvx_XvFCUA4uPDTk4ghvd8efQ30sMtkQqTaZXa-iFj1fHmcLjeddzU2PTs_klrFNmgZ1PT6qzO9ONX-x7qgGO=w260",
          tazaDesc: "Taza 9 - Papá sos admirable y maravilloso."
        },
        {
          id:10,
          urlImg:
            "https://lh5.googleusercontent.com/9_799-Nwu5edD9-EbaSzWRluv8Y8RAAQXduvoqd4SRIT2rvzrZNKElhVYeN_zVxT7ImBjAoPolliaOCnJ3ahsVxrvhELkJL4l_vfmv9V-oBZ4U4dYUkULIp_ilNx=w260",
          tazaDesc:
            "Taza 10 - Papá gracias por darme raices para ser fuerte y alas para volar."
        },
        {
          id:11,
          urlImg:
            "https://lh5.googleusercontent.com/G4nyO1nZEO1r5HR4K--ujri3_-ov_e4tcOG5G-7pKUbkaFIP_XmgbXwgWPyLWo7_haXua-U3ECDnw563fW93xkwqHDjxlxlW0dlsA7C-Lla7hP7uBdi2Tnooec85=w260",
          tazaDesc: "Taza 11 - El mejor papá del mundo entero."
        },
        {
          id:12,
          urlImg:
            "https://lh4.googleusercontent.com/yJfQ_zTZgHAr8m15JcaCzekogWFFY7AjvXfIN35fgYRfZTmxLxk81caZDIEN-l3GaweK0R6OGSdRF_6fUxeRrmLxKcpk5BLD08Pu0B5PR29kcu-IJgjPrBkaUITx=w260",
          tazaDesc: "Taza 12 - Papá sos el número uno."
        },
        {
          id:13,
          urlImg:
            "https://lh3.googleusercontent.com/a2VvgftnN6fLAfPcTDLTBYL1xyd4OCXA3s-XTRIxDhg2SuT5mMbB5M06DmU2FmjkJ0EzorTLfhidfcYPaOEb3AVqBJ3bJIO9QebhzJ6hhhGuFMM3xjeyioPA9jka=w260",
          tazaDesc: "Taza 13 - Sos el mejor papá."
        },
        {
          id:14,
          urlImg:
            "https://lh5.googleusercontent.com/pHVkZxcmDk9SYqcObumYT41TB_jriXO0gOzT76IiCN2pp9AFpKJHVrr8kn6hte2T4QqWEP-4wz4mufKFYsntZcCvNYPYTBFEsNNopFaSJ3Nf1ktBBADus7qBpzh4=w260",
          tazaDesc:
            "Taza 14 - Un papá como tú merece que lo celebremos 24 horas, 365 días."
        },
        {
          id:15,
          urlImg:
            "https://lh5.googleusercontent.com/M09AqVrCxbukY0vQujRnaQKjVF1ZZz8NIY3q39TuttmVLvyrf7wevy84gUvaALrQNUQAHbhBcBANWIpt2WFijTeymdCy44IbgSgKYTTk6QMfeNKf8ugb9ospMVUo=w260",
          tazaDesc: "Taza 15 - Papi te amamos mucho."
        },
        {
          id:16,
          urlImg:
            "https://lh3.googleusercontent.com/NHnSH5WXupNFxcRMrHM4vH3M0wK2_q9ip31ENzDFi8k7Z8eDMutHGJwDpIY8N2oFT5XYZHT0-VFRajQ8bNH18n0gWcyX_xaTd4-GGGJzx7FQ2mSirbcZT7uY_-e6=w260",
          tazaDesc: "Taza 16 - Papá te quiero hasta la luna ida y vuelta."
        }
      ],
      mates: [
        {
          id:1,
          urlImg:
            "https://lh6.googleusercontent.com/oFFP2w-EAGwvAqxSKegoPLfqcSuLvg_i-MH8CNXvh4KhxagaWsZ71seeMBsc50eLu86U6hYZva2hybUMizVG18sBkb7lp1Yn201svjQtLwLXxf5040EWvAuLv92N=w260",
          MateDesc: "Mate 01 - I love Papa."
        },
        {
          id:2,
          urlImg:
            "https://lh3.googleusercontent.com/rxykFuLB1UczJirJU_l5WPP4fjQMURIelmxkiDUMxiZChsV4RaEqserHEGyAmfppGLC_RRPsTyJMgSRKLHlGLJDUFwJDZmuN7JUvHaYqyQN04iicxhDisVZX2Qql=w260",
          MateDesc: "Mate 02 - Yo Quiero Bigote mi papa."
        },
        {
          id:3,
          urlImg:
            "https://lh5.googleusercontent.com/HjWw9RSbC1KzZAwkVehYqps_JDHjpZKOyW7yxsuKtLq_i6XfAxbcegDGFqItWb5rtUIOsg0OPTfCAKiINuvQC6fndgv82y0exIRRqofR8TsfhbCy22yFdy0wpgAY=w260",
          MateDesc: "Mate 03 - ünico en el planeta."
        },
        {
          id:4,
          urlImg:
            "https://lh4.googleusercontent.com/ZbSML6LM9ilAqE3PS6oS5hGnnk6Z5ElLbGj1q-CXwqJedn-0AiH3fJR5zMrpLlN37JDYn3D6DcHPT4OSynyzJSXP5vU4jM4EwVci6IR0lDeUUacjAxfNOrPst1Hz=w260",
          MateDesc: "Mate 04 - Papa estrella."
        },
        {
          id:5,
          urlImg:
            "https://lh6.googleusercontent.com/4Kio7U_eGI_h4XjteuLqeDaH8UiJMsYeNAZ16Nbl8G7jbSy9MNFjCsO4WOu0aSeBONwOYHxwSk5hJeR4klpxR_vJHjdtIR4AJe2B2X7L5N-6_e4q_EnVUdXrXBvf=w260",
          MateDesc: "Mate 05 - El mejor papi bigote."
        },
        {
          id:6,
          urlImg:
            "https://lh6.googleusercontent.com/YNP0opT1ke_iNr7wlD9l5Y-WxfbH-wiT7Gj58AA_BzUqr5jYi_H-VJErVA99HMNdko-WTj07hOlyKnpb2cYVYDL70K2a5cJaYClhrbSQjICIWwOV3DUd5fgssveH=w260",
          MateDesc: "Mate 06 - Mates papa mejores."
        },
        {
          id:7,
          urlImg:
            "https://lh4.googleusercontent.com/QJszsSCmZQEqg2DhDPP_iY8LUJfgYoMqeVUanrkn8PKJKUkx89sxkGu40J-jKJYN16kM_5vJcTMFilrv0BYSp7LRTYNKmxN53k3QsrX9jvyUzTmLVCyMDZQhUa0x=w260",
          MateDesc: "Mate 07 - Papá abuelo."
        },
      ]
    };
  },

  methods: {
    plus: function(e) {
      this.$store.commit("plus",e.target.value);
    },
    restarPrecio: function(e) {
      if (this.$store.state.prevTotal < this.$store.state.total) {
        this.$store.commit("restarPlus",e.target.value);
      }
    }
  }
};
</script>
