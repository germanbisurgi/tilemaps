function et() {
  const i = [];
  return function(e, t) {
    if (typeof t != "object" || t === null)
      return t;
    for (; i.length > 0 && i.at(-1) !== this; )
      i.pop();
    return i.includes(t) ? "[Circular]" : (i.push(t), t);
  };
}
function M(i) {
  if (!(typeof i > "u"))
    return JSON.parse(JSON.stringify(i, et()));
}
function tt(i) {
  return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function De(i, e, t) {
  return i.replace(new RegExp(tt(e), "g"), t);
}
function w(i) {
  return De(De(i, "#", "root"), "/", "-");
}
function N(i, e) {
  return Object.prototype.hasOwnProperty.call(i, e);
}
function Ie(i) {
  return Object.keys(i).sort().reduce((e, t) => (e[t] = i[t], e), {});
}
function we(i, e) {
  return g(i) && g(e) && (i = Ie(i), e = Ie(e)), JSON.stringify(i) === JSON.stringify(e);
}
function Pe(i, e) {
  return !we(i, e);
}
function Ae(i) {
  return i === null;
}
function d(i) {
  return typeof i < "u";
}
function U(i) {
  return typeof i > "u";
}
function T(i) {
  return typeof i == "number";
}
function B(i) {
  return T(i) && i === Math.floor(i);
}
function R(i) {
  return typeof i == "string";
}
function P(i) {
  return typeof i == "boolean";
}
function x(i) {
  return Array.isArray(i);
}
function g(i) {
  return !Ae(i) && !x(i) && typeof i == "object";
}
function st(i) {
  let e = "any";
  return T(i) ? e = B(i) ? "integer" : "number" : R(i) ? e = "string" : P(i) ? e = "boolean" : x(i) ? e = "array" : Ae(i) ? e = "null" : g(i) && (e = "object"), e;
}
function K(i, ...e) {
  if (!e.length)
    return i;
  const t = e.shift();
  return g(i) && g(t) && Object.keys(t).forEach((s) => {
    g(t[s]) ? (i[s] || Object.assign(i, {
      [s]: {}
    }), K(i[s], t[s])) : Object.assign(i, {
      [s]: t[s]
    });
  }), K(i, ...e);
}
function it(i, e) {
  return Object.keys(e).forEach(function(t) {
    t in i && typeof i[t] == typeof e[t] && (i[t] = e[t]);
  }), i;
}
function nt(i, e) {
  const t = e.split(".");
  let s = i;
  for (const n of t)
    if (Array.isArray(s) && /^\d+$/.test(n)) {
      const r = parseInt(n);
      if (r >= 0 && r < s.length)
        s = s[r];
      else
        return;
    } else if (N(s, n))
      s = s[n];
    else
      return;
  return s;
}
function E(i, e) {
  return i.replace(/{{(.*?)}}/g, (t) => {
    t = t.replace(/\s/g, "");
    const s = t.split(/{{|}}/)[1];
    return nt(e, s);
  });
}
function rt(i, e, t) {
  return Math.max(e, Math.min(i, t));
}
function $e(i) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (const s of i) {
    const n = JSON.stringify(s);
    t.has(n) || (t.add(n), e.push(s));
  }
  return e;
}
function Se(i) {
  return g(i.additionalProperties) || P(i.additionalProperties) ? i.additionalProperties : void 0;
}
function at(i) {
  return g(i.propertyNames) || P(i.propertyNames) ? i.propertyNames : void 0;
}
function Ke(i) {
  return x(i.allOf) ? i.allOf : void 0;
}
function $(i) {
  return x(i.anyOf) ? i.anyOf : void 0;
}
function ot(i) {
  return i.const;
}
function lt(i) {
  return g(i.contains) || P(i.contains) ? i.contains : void 0;
}
function ct(i) {
  return i.default;
}
function ze(i) {
  return g(i.dependentRequired) ? i.dependentRequired : void 0;
}
function dt(i) {
  return g(i.dependentSchemas) ? i.dependentSchemas : void 0;
}
function j(i) {
  return R(i.description) ? i.description : void 0;
}
function Oe(i) {
  return g(i.else) || P(i.else) ? i.else : void 0;
}
function V(i) {
  if (x(i.enum) && i.enum.length > 0)
    return i.enum;
}
function ht(i) {
  return T(i.exclusiveMaximum) ? i.exclusiveMaximum : void 0;
}
function ut(i) {
  return T(i.exclusiveMinimum) ? i.exclusiveMinimum : void 0;
}
function q(i) {
  return R(i.format) ? i.format : void 0;
}
function Te(i) {
  if (g(i.if) || P(i.if))
    return i.if;
}
function Je(i) {
  return g(i.items) || P(i.items) ? i.items : void 0;
}
function pt(i) {
  return T(i.maximum) ? i.maximum : void 0;
}
function mt(i) {
  if (B(i.maxContains) && i.maxContains >= 0)
    return i.maxContains;
}
function Ge(i) {
  if (B(i.maxItems) && i.maxItems >= 0)
    return i.maxItems;
}
function ft(i) {
  if (B(i.maxLength) && i.maxLength >= 0)
    return i.maxLength;
}
function gt(i) {
  if (B(i.maxProperties))
    return i.maxProperties;
}
function bt(i) {
  return T(i.minimum) ? i.minimum : void 0;
}
function vt(i) {
  if (B(i.minContains) && i.minContains >= 0)
    return i.minContains;
}
function _e(i) {
  if (B(i.minItems) && i.minItems >= 0)
    return i.minItems;
}
function Ct(i) {
  if (B(i.minLength) && i.minLength >= 0)
    return i.minLength;
}
function yt(i) {
  if (B(i.minProperties) && i.minProperties >= 0)
    return i.minProperties;
}
function Et(i) {
  if (T(i.multipleOf) && i.multipleOf >= 0)
    return i.multipleOf;
}
function Lt(i) {
  return g(i.not) || P(i.not) ? i.not : void 0;
}
function m(i, e) {
  return i.options && i.options[e] ? i.options[e] : void 0;
}
function xt(i) {
  return R(i.pattern) ? i.pattern : void 0;
}
function je(i) {
  return g(i.patternProperties) ? i.patternProperties : void 0;
}
function ke(i) {
  return x(i.prefixItems) ? i.prefixItems : void 0;
}
function Me(i) {
  return g(i.properties) ? i.properties : void 0;
}
function Fe(i) {
  return P(i.readOnly) ? i.readOnly : void 0;
}
function We(i) {
  return x(i.required) ? [...new Set(i.required)] : void 0;
}
function Ve(i) {
  return g(i.then) || P(i.then) ? i.then : void 0;
}
function I(i) {
  return R(i.title) ? i.title : void 0;
}
function H(i) {
  if (R(i.type) || x(i.type))
    return i.type;
}
function z(i) {
  return x(i.oneOf) ? i.oneOf : void 0;
}
function It(i) {
  return P(i.unevaluatedProperties) ? i.unevaluatedProperties : void 0;
}
function wt(i) {
  return P(i.uniqueItems) ? i.uniqueItems : void 0;
}
function J(i, e, t, s) {
  let n = [];
  const r = Ke(t);
  return d(r) && r.forEach((a) => {
    const o = new S({ refParser: i.refParser, schema: a, data: e, rootName: s }), l = o.getErrors();
    o.destroy(), n = [...n, ...l], n = $e(n);
  }), n;
}
const v = {
  errorAdditionalProperties: 'Has additional property "{{ property }}" but no additional properties are allowed.',
  errorAnyOf: "Must validate against at least one of the provided schemas.",
  errorConst: "Must have value of: {{ const }}.",
  errorContains: "Must contain at least one item matching the provided schema.",
  errorDependentRequired: "Must have the required properties: {{ dependentRequired }}.",
  errorEnum: "Must be one of the enumerated values: {{ enum }}.",
  errorExclusiveMaximum: "Must be less than {{ exclusiveMaximum }}.",
  errorExclusiveMinimum: "Must be greater than {{ exclusiveMinimum }}.",
  errorFormat: "Must be a valid {{ format }}.",
  errorItems: "Must have items that validate against the provided schema.",
  errorMaximum: "Must be at most {{ maximum }}.",
  errorMaxItems: "Must have at most {{ maxItems }} items.",
  errorMaxLength: "Must be at most {{ maxLength }} characters long.",
  errorMaxProperties: "Must have at most {{ maxProperties }} properties.",
  errorMaxContains: "Must contain at most {{ maxContains }} items matching the provided schema. It currently contains {{ counter }}.",
  errorMinContains: "Must contain at least {{ minContains }} items matching the provided schema. It currently contains {{ counter }}.",
  errorMinimum: "Must be at least {{ minimum }}.",
  errorMinItems: "Must have at least {{ minItems }} items.",
  errorMinLength: "Must be at least {{ minLength }} characters long.",
  errorMinProperties: "Must have at least {{ minProperties }} properties.",
  errorMultipleOf: "Must be multiple of {{ multipleOf }}.",
  errorNot: "Must not validate against the provided schema.",
  errorOneOf: "Must validate against exactly one of the provided schemas. It currently validates against {{ counter }} of the schemas.",
  errorPattern: 'Must match the pattern: "{{ pattern }}".',
  errorPrefixItems: "Item {{ index }} fails validation.",
  errorPropertyNames: 'Property name "{{ propertyName }}" fails validation.',
  errorRequired: "Must have the required properties: {{ required }}.",
  errorType: "Must be of type {{ type }}.",
  errorUnevaluatedProperties: 'Has invalid unevaluated property "{{ property }}"',
  errorUniqueItems: "Must have unique items."
};
function G(i, e, t, s, n) {
  const r = [], a = Ct(t);
  return R(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length < a && r.push({
    messages: [
      E(v.errorMinLength, {
        minLength: a
      })
    ],
    path: n,
    constrain: "minLength"
  })), r;
}
function _(i, e, t, s, n) {
  const r = [], a = $(t);
  if (d(a)) {
    let o = !1;
    a.forEach((l) => {
      const c = new S({ refParser: i.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && (o = !0);
    }), o || r.push({
      messages: [
        v.errorAnyOf
      ],
      path: n,
      constrain: "anyOf"
    });
  }
  return r;
}
function W(i, e, t, s, n) {
  const r = [], a = V(t);
  return d(a) && !a.some((l) => JSON.stringify(e) === JSON.stringify(l)) && r.push({
    messages: [
      E(v.errorEnum, {
        enum: JSON.stringify(a)
      })
    ],
    path: n,
    constrain: "enum"
  }), r;
}
function Q(i, e, t, s, n) {
  const r = [], a = ht(t);
  return T(e) && d(a) && e >= a && r.push({
    messages: [
      E(v.errorExclusiveMaximum, {
        exclusiveMaximum: a
      })
    ],
    path: n,
    constrain: "exclusiveMaximum"
  }), r;
}
function X(i, e, t, s, n) {
  const r = [], a = ut(t);
  return T(e) && d(a) && e <= a && r.push({
    messages: [
      E(v.errorExclusiveMinimum, {
        exclusiveMinimum: a
      })
    ],
    path: n,
    constrain: "exclusiveMinimum"
  }), r;
}
function Y(i, e, t, s, n) {
  const r = [], a = q(t);
  let o = i.validateFormat;
  if (m(t, "validateFormat") && (o = t.options.validateFormat), d(a) && R(e) && o) {
    let l;
    a === "email" && (l = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)), a === "url" && (l = new RegExp(/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu)), a === "uuid" && (l = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i)), d(l) && !l.test(e) && r.push({
      messages: [
        E(v.errorFormat, { format: a })
      ],
      path: n,
      constrain: "format"
    });
  }
  return r;
}
function Z(i, e, t, s, n) {
  const r = [], a = Je(t), o = ke(t);
  if (x(e) && d(a)) {
    const l = d(o) ? o.length : 0;
    a === !1 && e.length > 0 && e.length > l && r.push({
      messages: [v.errorItems],
      path: n,
      constrain: "items"
    });
  }
  return r;
}
function ee(i, e, t, s, n) {
  const r = [], a = Ge(t);
  return x(e) && d(a) && e.length > a && r.push({
    messages: [
      E(v.errorMaxItems, {
        maxItems: a
      })
    ],
    path: n,
    constrain: "maxItems"
  }), r;
}
function te(i, e, t, s, n) {
  const r = [], a = ft(t);
  return R(e) && d(a) && (e = e.replace(/[\uDCA9]/g, ""), e.length > a && r.push({
    messages: [
      E(v.errorMaxLength, {
        maxLength: a
      })
    ],
    path: n,
    constrain: "maxLength"
  })), r;
}
function se(i, e, t, s, n) {
  const r = [], a = gt(t);
  return g(e) && d(a) && Object.keys(e).length > a && r.push({
    messages: [
      E(v.errorMaxProperties, {
        maxProperties: a
      })
    ],
    path: n,
    constrain: "maxProperties"
  }), r;
}
function ie(i, e, t, s, n) {
  const r = [], a = bt(t);
  return T(e) && d(a) && e < a && r.push({
    messages: [
      E(v.errorMinimum, {
        minimum: a
      })
    ],
    path: n,
    constrain: "minimum"
  }), r;
}
function ne(i, e, t, s, n) {
  const r = [], a = _e(t);
  return x(e) && d(a) && e.length < a && r.push({
    messages: [
      E(v.errorMinItems, {
        minItems: a
      })
    ],
    path: n,
    constrain: "minItems"
  }), r;
}
function re(i, e, t, s, n) {
  const r = [], a = yt(t);
  return g(e) && d(a) && Object.keys(e).length < a && r.push({
    messages: [
      E(v.errorMinProperties, {
        minProperties: a
      })
    ],
    path: n,
    constrain: "minProperties"
  }), r;
}
function ae(i, e, t, s, n) {
  const r = [], a = Et(t);
  if (T(e) && d(a)) {
    if (e === 0)
      return r;
    (!(e / a === Math.floor(e / a)) || e.toString().includes("e")) && r.push({
      messages: [
        E(v.errorMultipleOf, {
          multipleOf: a
        })
      ],
      path: n,
      constrain: "multipleOf"
    });
  }
  return r;
}
function oe(i, e, t, s, n) {
  const r = [], a = Lt(t);
  if (d(a)) {
    const o = new S({ refParser: i.refParser, schema: a, data: e }), l = o.getErrors();
    o.destroy(), l.length === 0 && r.push({
      messages: [
        E(v.errorNot)
      ],
      path: n,
      constrain: "not"
    });
  }
  return r;
}
function le(i, e, t, s, n) {
  const r = [], a = z(t);
  if (d(a)) {
    let o = 0;
    a.forEach((l) => {
      const c = new S({ refParser: i.refParser, schema: l, data: e }), h = c.getErrors();
      c.destroy(), h.length === 0 && o++;
    }), o !== 1 && r.push({
      messages: [
        E(v.errorOneOf, {
          counter: o
        })
      ],
      path: n,
      constrain: "oneOf"
    });
  }
  return r;
}
function ce(i, e, t, s, n) {
  const r = [], a = xt(t);
  return R(e) && d(a) && !new RegExp(a).test(e) && r.push({
    messages: [
      E(v.errorPattern, {
        pattern: a
      })
    ],
    path: n,
    constrain: "pattern"
  }), r;
}
function de(i, e, t, s) {
  let n = [];
  const r = je(t);
  return g(e) && d(r) && Object.keys(e).forEach((a) => {
    Object.keys(r).forEach((o) => {
      if (new RegExp(o).test(a)) {
        const c = r[o], h = new S({
          refParser: i.refParser,
          schema: c,
          data: e[a]
        }), u = h.getErrors().map((p) => ({
          messages: p.messages,
          path: s + "/" + a,
          constrain: "patternProperties"
        }));
        n = [...n, ...u], h.destroy();
      }
    });
  }), n;
}
function he(i, e, t, s, n) {
  const r = [], a = We(t);
  if (g(e) && d(a)) {
    const o = [], l = Object.keys(e);
    a.forEach((h) => {
      l.includes(h) || o.push(h);
    }), o.length > 0 && r.push({
      messages: [
        E(v.errorRequired, {
          required: o.join(", ")
        })
      ],
      path: n,
      constrain: "required"
    });
  }
  return r;
}
function ue(i, e, t, s, n) {
  const r = [], a = H(t);
  if (a === "any")
    return r;
  if (d(a)) {
    const o = {
      string: (c) => R(c),
      number: (c) => T(c),
      integer: (c) => B(c),
      boolean: (c) => P(c),
      array: (c) => x(c),
      object: (c) => g(c),
      null: (c) => Ae(c)
    };
    let l = !0;
    x(a) ? l = a.some((c) => o[c](e)) : l = o[a](e), l || r.push({
      messages: [
        E(v.errorType, {
          type: a,
          valueType: st(e)
        })
      ],
      path: n,
      constrain: "type"
    });
  }
  return r;
}
function pe(i, e, t, s, n) {
  const r = [], a = pt(t);
  return T(e) && d(a) && e > a && r.push({
    messages: [
      E(v.errorMaximum, {
        maximum: a
      })
    ],
    path: n,
    constrain: "maximum"
  }), r;
}
function me(i, e, t, s, n) {
  const r = [], a = wt(t);
  if (x(e) && d(a) && a === !0) {
    const o = [];
    let l = !1;
    for (let h = 0; h < e.length; h++) {
      let u = e[h];
      g(u) && (u = Ie(u));
      const p = JSON.stringify(u);
      if (l = o.some((f) => f === p), l)
        break;
      o.push(p);
    }
    l && r.push({
      messages: [
        v.errorUniqueItems
      ],
      path: n,
      constrain: "uniqueItems"
    });
  }
  return r;
}
function fe(i, e, t, s, n) {
  let r = [];
  const a = Se(t), o = je(t), l = Me(t);
  if (g(e) && d(a)) {
    const c = d(l) ? l : {}, h = a, u = o;
    c && Object.keys(e).forEach((p) => {
      let f = !1;
      if (d(u) && Object.keys(u).forEach((b) => {
        f = new RegExp(b).test(p);
      }), !f && h === !1 && !N(c, p) && r.push({
        messages: [
          E(v.errorAdditionalProperties, {
            property: p
          })
        ],
        path: n,
        constrain: "additionalProperties"
      }), !f && g(h) && !N(c, p)) {
        const b = new S({
          refParser: i.refParser,
          schema: h,
          data: e[p]
        }), C = b.getErrors().map((y) => ({
          messages: y.messages,
          path: p,
          constrain: "additionalProperties"
        }));
        r = [...r, ...C], b.destroy();
      }
    });
  }
  return r;
}
const St = {
  additionalProperties: fe,
  allOf: J,
  anyOf: _,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  items: Z,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  required: he,
  type: ue,
  uniqueItems: me
};
function be(i, e, t, s, n) {
  const r = [], a = ot(t);
  return d(a) && Pe(e, a) && r.push({
    messages: [
      E(v.errorConst, {
        const: JSON.stringify(a)
      })
    ],
    path: n,
    constrain: "const"
  }), r;
}
function ve(i, e, t, s, n) {
  const r = [], a = lt(t), o = vt(t), l = mt(t);
  if (x(e) && d(a)) {
    let c = 0;
    e.forEach((u) => {
      const p = new S({ refParser: i.refParser, schema: a, data: u });
      p.getErrors().length === 0 && c++, p.destroy();
    });
    const h = c === 0;
    d(o) ? c < o && r.push({
      messages: [
        E(v.errorMinContains, {
          counter: c,
          minContains: o
        })
      ],
      path: n,
      constrain: "minContains"
    }) : h && r.push({
      messages: [v.errorContains],
      path: n,
      constrain: "contains"
    }), d(l) && c > l && r.push({
      messages: [
        E(v.errorMaxContains, {
          counter: c,
          maxContains: l
        })
      ],
      path: n,
      constrain: "maxContains"
    });
  }
  return r;
}
function Ce(i, e, t, s, n) {
  const r = [], a = ze(t);
  if (g(e) && d(a)) {
    let o = [];
    Object.keys(a).forEach((c) => {
      d(e[c]) && (o = a[c].filter((u) => !N(e, u)));
    }), o.length > 0 && r.push({
      messages: [
        E(v.errorDependentRequired, {
          dependentRequired: o.join(", ")
        })
      ],
      path: n,
      constrain: "dependentRequired"
    });
  }
  return r;
}
function ye(i, e, t) {
  let s = [];
  const n = dt(t);
  return g(e) && d(n) && Object.keys(n).forEach((r) => {
    if (d(e[r])) {
      const a = n[r], o = new S({ refParser: i.refParser, schema: a, data: e }), l = o.getErrors();
      o.destroy(), s = [...s, ...l];
    }
  }), s;
}
function Ee(i, e, t) {
  const s = [], n = Te(t), r = Ve(t), a = Oe(t);
  if (d(n)) {
    if (U(r) && U(a))
      return s;
    const o = new S({ refParser: i.refParser, schema: n, data: e }), l = o.getErrors();
    o.destroy();
    let c = [], h = [];
    if (d(r)) {
      const u = new S({ refParser: i.refParser, schema: r, data: e });
      c = u.getErrors(), u.destroy();
    }
    if (d(a)) {
      const u = new S({ refParser: i.refParser, schema: a, data: e });
      h = u.getErrors(), u.destroy();
    }
    if (n === !0)
      return c;
    if (n === !1)
      return h;
    if (l.length === 0)
      return c;
    if (l.length > 0)
      return h;
  }
  return s;
}
function Le(i, e, t, s, n) {
  const r = [], a = ke(t);
  return x(e) && d(a) && a.forEach((o, l) => {
    const c = e[l];
    if (d(c)) {
      const h = new S({ refParser: i.refParser, schema: o, data: c }), u = h.getErrors();
      h.destroy(), u.length > 0 && r.push({
        messages: [
          E(v.errorPrefixItems, {
            index: l
          })
        ],
        path: n,
        constrain: "prefixItems"
      });
    }
  }), r;
}
const Pt = {
  additionalProperties: fe,
  allOf: J,
  anyOf: _,
  const: be,
  contains: ve,
  dependentRequired: Ce,
  dependentSchemas: ye,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Ee,
  items: Z,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Le,
  required: he,
  type: ue,
  uniqueItems: me
}, At = {
  additionalProperties: fe,
  allOf: J,
  anyOf: _,
  const: be,
  contains: ve,
  dependentRequired: Ce,
  dependentSchemas: ye,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Ee,
  items: Z,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Le,
  required: he,
  type: ue,
  uniqueItems: me
};
function Qe(i, e, t, s, n) {
  let r = [];
  const a = It(t), o = je(t), l = Me(t), c = Ke(t), h = $(t), u = z(t);
  if (g(e) && d(a)) {
    let p = d(l) ? l : {};
    const f = a, b = o;
    [
      c,
      h,
      u
    ].forEach((y) => {
      d(y) && y.forEach((L) => {
        d(L.properties) && (p = { ...p, ...L.properties });
      });
    }), p && Object.keys(e).forEach((y) => {
      let L = !1;
      if (d(b) && Object.keys(b).forEach((k) => {
        L = new RegExp(k).test(y);
      }), !L && f === !1 && !N(p, y) && r.push({
        messages: [
          E(v.errorUnevaluatedProperties, {
            property: y
          })
        ],
        path: n,
        constrain: "unevaluatedProperties"
      }), !L && g(f) && !N(p, y)) {
        const k = new S({
          refParser: i.refParser,
          schema: f,
          data: e[y]
        }), A = k.getErrors().map((O) => ({
          messages: O.messages,
          path: y,
          constrain: "unevaluatedProperties"
        }));
        r = [...r, ...A], k.destroy();
      }
    });
  }
  return r;
}
const Ot = {
  additionalProperties: fe,
  allOf: J,
  anyOf: _,
  const: be,
  contains: ve,
  dependentRequired: Ce,
  dependentSchemas: ye,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Ee,
  items: Z,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Le,
  required: he,
  type: ue,
  unevaluatedProperties: Qe,
  uniqueItems: me
};
function Tt(i, e, t, s, n) {
  const r = [], a = at(t);
  return g(e) && d(a) && Object.keys(e).forEach((o) => {
    new S({
      refParser: i.refParser,
      schema: a,
      data: o
    }).getErrors().length > 0 && r.push({
      messages: [
        E(v.errorPropertyNames, { propertyName: o })
      ],
      path: n,
      constrain: "propertyNames"
    });
  }), r;
}
const Ue = {
  additionalProperties: fe,
  allOf: J,
  anyOf: _,
  const: be,
  contains: ve,
  dependentRequired: Ce,
  dependentSchemas: ye,
  enum: W,
  exclusiveMaximum: Q,
  exclusiveMinimum: X,
  format: Y,
  if: Ee,
  items: Z,
  maximum: pe,
  maxItems: ee,
  maxLength: te,
  maxProperties: se,
  minimum: ie,
  minItems: ne,
  minLength: G,
  minProperties: re,
  multipleOf: ae,
  not: oe,
  oneOf: le,
  pattern: ce,
  patternProperties: de,
  prefixItems: Le,
  propertyNames: Tt,
  required: he,
  type: ue,
  unevaluatedProperties: Qe,
  uniqueItems: me
};
class jt {
  constructor(e = {}) {
    this.refParser = e.refParser, this.validateFormat = e.validateFormat ? e.validateFormat : !1, this.draft = Ue, this.jsonSchemaDrafts = {
      "http://json-schema.org/draft-04/schema#": St,
      "http://json-schema.org/draft-06/schema#": Pt,
      "http://json-schema.org/draft-07/schema#": At,
      "https://json-schema.org/draft/2019-09/schema": Ot,
      "https://json-schema.org/draft/2020-12/schema": Ue
    };
  }
  /**
   * Validates a value against it's schema
   */
  getErrors(e, t, s, n) {
    let r = [];
    const a = m(t, "messages"), o = M(t);
    return P(o) && o === !0 ? r : P(o) && o === !1 ? [{
      messages: d(a) ? a : ["invalid"],
      path: n
    }] : (Object.keys(this.draft).forEach((l) => {
      if (N(o, l)) {
        const c = this.draft[l], h = c(this, e, t, s, n);
        h && (r = [...r, ...h]);
      }
    }), r.length > 0 && a && (r = [
      {
        messages: a,
        path: n
      }
    ]), r);
  }
}
class Xe {
  constructor() {
    this.listeners = [];
  }
  /**
   * Adds a named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed when this event is emitted
   */
  on(e, t) {
    this.listeners.push({ name: e, callback: t });
  }
  off(e) {
    this.listeners = this.listeners.filter((t) => t.name !== e);
  }
  /**
   * Triggers the callback function of a named event listener
   * @public
   * @param {string} name - The name of the event to be emitted
   * @param {*} payload - Payload containing data that is passed along with the callback function
   */
  emit(e, t = void 0) {
    this.listeners.filter((n) => n.name === e).forEach((n) => {
      n.callback(t);
    });
  }
  /**
   * Deletes all properties of the class
   */
  destroy() {
    Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
}
class D extends Xe {
  constructor(e) {
    super(), this.jedi = e.jedi, this.path = e.path || this.jedi.rootName, this.schema = e.schema, this.value = d(e.value) ? e.value : void 0, this.isActive = !0, this.parent = e.parent || null, this.children = [], this.ui = null, this.init();
  }
  /**
   * Initializes and register the instance
   */
  init() {
    this.register(), this.setInitialValue(), this.prepare(), this.setDefaultValue(), this.jedi.options.container && this.setUI(), this.on("change", () => {
      this.parent && this.parent.onChildChange();
    });
  }
  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI() {
  }
  /**
   * Return the last part of the instance path
   */
  getKey() {
    return this.path.split(this.jedi.pathSeparator).pop();
  }
  /**
   * Adds a child instance pointer to the instances list
   */
  register() {
    this.jedi.register(this);
  }
  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister() {
    this.jedi.unregister(this);
  }
  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue() {
    if (U(this.value)) {
      let e;
      const t = H(this.schema);
      t === "boolean" && (e = !1), t === "number" && (e = 0), t === "integer" && (e = 0), t === "string" && (e = ""), t === "array" && (e = []), t === "object" && (e = {}), t === "null" && (e = null), this.value = e;
    }
  }
  setDefaultValue() {
    const e = ct(this.schema);
    d(e) && this.setValue(e, !1);
  }
  /**
   * Returns the value of the instance
   */
  getValue() {
    return this.value;
  }
  /**
   * Sets the instance value
   */
  setValue(e, t = !0) {
    this.value = e, this.emit("set-value", e), t && this.emit("change");
  }
  /**
   * Fires when a child's instance state changes
   */
  onChildChange() {
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    if (!this.isActive)
      return [];
    const e = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
    return $e(e);
  }
  /**
   * Prepare data before building the editor
   */
  prepare() {
  }
  /**
   * Activates the instance
   */
  activate() {
    this.isActive === !1 && (this.isActive = !0, this.emit("change"));
  }
  /**
   * Deactivates the instance
   */
  deactivate() {
    this.isActive === !0 && (this.isActive = !1, this.emit("change"));
  }
  /**
   * Returns true if this instance is read only
   */
  isReadOnly() {
    let e = !1;
    return Fe(this.schema) === !0 && (e = !0), this.parent && Fe(this.parent.schema) === !0 && (e = !0), e;
  }
  /**
   * Destroy the instance and it's children
   */
  destroy() {
    this.listeners = [], this.children.forEach((e) => {
      e.destroy();
    }), this.unregister(), this.ui && this.ui.destroy(), Object.keys(this).forEach((e) => {
      delete this[e];
    }), super.destroy();
  }
}
const kt = {
  properties: "glyphicon glyphicon-list",
  delete: "glyphicon glyphicon-trash",
  add: "glyphicon glyphicon-plus",
  moveUp: "glyphicon glyphicon-arrow-up",
  moveDown: "glyphicon glyphicon-arrow-down",
  collapse: "glyphicon glyphicon-chevron-down"
}, Mt = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down",
  collapse: "bi bi-chevron-down"
}, Vt = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down",
  collapse: "icon-chevron-down"
}, Rt = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down",
  collapse: "fa fa-chevron-down"
}, Ht = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down",
  collapse: "fas fa-chevron-down"
}, Bt = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down",
  collapse: "fa-solid fa-chevron-down"
};
class xe {
  constructor(e = null) {
    this.icons = e, this.useToggleEvents = !0, this.init();
  }
  /**
   * Inits some instance properties
   * @private
   */
  init() {
    this.useToggleEvents = !0;
  }
  /**
   * Returns a icon element
   * @private
   */
  getIcon(e) {
    const t = document.createElement("i"), s = this.icons[e].split(" ");
    return s.length > 0 && s.forEach((n) => {
      t.classList.add(n);
    }), t;
  }
  /**
   * Used to wrap the editor UI elements
   * @private
   */
  getEditorContainer() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-container"), e;
  }
  /**
   * Used to group several controls
   * @private
   */
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("jedi-editor-fieldset"), e;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   * @private
   */
  getLegend(e) {
    const t = document.createElement("legend"), s = document.createElement("span");
    return t.classList.add("jedi-editor-legend"), s.classList.add("jedi-editor-legend-text"), t.setAttribute("aria-labelledby", "#legend-" + e.id), s.textContent = e.textContent, s.setAttribute("id", "#legend-" + e.id), t.appendChild(s), t;
  }
  /**
   * Container for complex editors like arrays, objects and multiple
   * @private
   */
  getCard() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-card"), e;
  }
  /**
   * Header for cards
   * @private
   */
  getCardHeader() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-card-header"), e;
  }
  /**
   * A body for the cards
   * @private
   */
  getCardBody() {
    const e = document.createElement("div");
    return e.classList.add("jedi-editor-card-body"), e;
  }
  /**
   * Wrapper for editor actions buttons
   * @private
   */
  getActionsSlot() {
    const e = document.createElement("div");
    return e.classList.add("jedi-actions-slot"), e;
  }
  /**
   * Wrapper for editor array specific actions buttons
   * @private
   */
  getArrayActionsSlot() {
    const e = document.createElement("span");
    return e.classList.add("jedi-array-actions-slot"), e;
  }
  /**
   * Wrapper for child editors
   * @private
   */
  getChildrenSlot() {
    const e = document.createElement("div");
    return e.classList.add("jedi-children-slot"), e;
  }
  /**
   * Wrapper for error messages
   * @private
   */
  getMessagesSlot(e = {}) {
    const t = document.createElement("div");
    return t.classList.add("jedi-messages-slot"), t.setAttribute("aria-atomic", "false"), t.setAttribute("aria-live", "polite"), e.id && t.setAttribute("id", e.id), t;
  }
  /**
   * Wrapper for editor controls
   * @private
   */
  getControlSlot() {
    const e = document.createElement("div");
    return e.classList.add("jedi-control-slot"), e;
  }
  /**
   * Toggles the ObjectEditor properties wrapper visibility
   * @private
   */
  getPropertiesToggle(e) {
    const t = this.getButton(e);
    return t.classList.add("jedi-properties-toggle"), t.addEventListener("click", () => {
      e.propertiesContainer.open ? e.propertiesContainer.close() : e.propertiesContainer.showModal();
    }), t;
  }
  /**
   * Container that will collapse and expand to show and hide it contents
   * @private
   */
  getCollapse(e) {
    const t = document.createElement("div");
    return t.classList.add("jedi-collapse"), t.setAttribute("id", e.id), this.useToggleEvents && e.startCollapsed && (t.style.display = "none"), t;
  }
  /**
   * Toggle button for collapse
   * @private
   */
  getCollapseToggle(e) {
    const t = this.getButton(e);
    t.classList.add("jedi-collapse-toggle"), this.useToggleEvents && t.addEventListener("click", () => {
      e.collapse.style.display === "none" ? e.collapse.style.display = "block" : e.collapse.style.display = "none";
    });
    let s = e.startCollapsed;
    return t.style.transition = "transform 0.1s ease", s && (t.style.transform = "rotate(90deg)"), t.addEventListener("click", () => {
      s ? t.style.transform = "rotate(0deg)" : t.style.transform = "rotate(90deg)", s = !s;
    }), t;
  }
  /**
   * Container for properties editing elements like property activators
   * @private
   */
  getPropertiesSlot(e) {
    const t = document.createElement("dialog");
    return t.classList.add("jedi-properties-slot"), t.setAttribute("id", e.id), window.addEventListener("click", (s) => {
      s.target === t && t.close();
    }), t;
  }
  /**
   * Container for screen reader announced messages
   * @private
   */
  getPropertiesAriaLive() {
    const e = document.createElement("div");
    return e.classList.add("jedi-properties-aria-live"), e.setAttribute("role", "status"), e.setAttribute("aria-live", "polite"), e;
  }
  /**
   * A message that will be announced by screen reader
   * @private
   */
  getAriaLiveMessage(e) {
    const t = document.createElement("p");
    return t.classList.add("jedi-aria-live-message"), t.textContent = e, this.visuallyHidden(t), t;
  }
  /**
   * Wrapper for property activators
   * @private
   */
  getPropertiesActivators() {
    const e = document.createElement("div");
    return e.classList.add("jedi-properties-activators"), e;
  }
  /**
   * Wrapper buttons
   * @private
   */
  getBtnGroup() {
    const e = document.createElement("span");
    return e.classList.add("jedi-btn-group"), e;
  }
  /**
   * A button
   * @private
   */
  getButton(e) {
    const t = document.createElement("button");
    t.classList.add("jedi-btn"), t.setAttribute("type", "button"), e.value && (t.value = e.value), e.id && t.setAttribute("id", e.id);
    const s = document.createElement("span");
    if (s.textContent = e.textContent, this.icons && e.icon) {
      const n = this.getIcon(e.icon);
      n.setAttribute("title", e.textContent), t.appendChild(n), this.visuallyHidden(s);
    }
    return t.appendChild(s), t;
  }
  /**
   * Array "add" item button
   * @private
   */
  getArrayBtnAdd() {
    const e = this.getButton({
      textContent: "Add item",
      icon: "add"
    });
    return e.classList.add("jedi-array-add"), e;
  }
  getAddPropertyButton() {
    const e = this.getButton({
      textContent: "Add property"
    });
    return e.classList.add("jedi-add-property-btn"), e;
  }
  /**
   * Array "delete" item button
   * @private
   */
  getDeleteItemBtn() {
    const e = this.getButton({
      textContent: "Delete item",
      icon: "delete"
    });
    return e.classList.add("jedi-array-delete"), e;
  }
  /**
   * Array "move up" item button
   * @private
   */
  getMoveUpItemBtn() {
    const e = this.getButton({
      textContent: "Move up",
      icon: "moveUp"
    });
    return e.classList.add("jedi-array-move-up"), e;
  }
  /**
   * Array "move down" item button
   * @private
   */
  getMoveDownItemBtn() {
    const e = this.getButton({
      textContent: "Move down",
      icon: "moveDown"
    });
    return e.classList.add("jedi-array-move-down"), e;
  }
  /**
   * Wrapper for the editor description
   * @private
   */
  getDescription(e = {}) {
    const t = document.createElement("small");
    return t.classList.add("jedi-description"), e.textContent && (t.textContent = e.textContent), e.id && t.setAttribute("id", e.id), t;
  }
  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   * @private
   */
  getObjectControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = this.getCardBody(), a = this.getPropertiesAriaLive(), o = this.getDescription({
      textContent: e.description
    }), l = this.getMessagesSlot(), c = this.getChildrenSlot(), h = this.getPropertiesSlot({
      id: "properties-slot-" + e.id
    }), u = this.getPropertiesToggle({
      textContent: e.title + " properties",
      id: "properties-slot-toggle-" + e.id,
      icon: "properties",
      propertiesContainer: h
    }), p = "collapse-" + e.id, f = this.getCollapse({
      id: p,
      startCollapsed: e.startCollapsed
    }), b = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: p,
      collapse: f,
      startCollapsed: e.startCollapsed
    }), C = this.getPropertiesActivators(), y = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + e.id,
      label: "Property"
    }), L = this.getAddPropertyButton(), k = this.getFieldset(), A = this.getLegend({
      textContent: e.title,
      id: e.id
    });
    return L.classList.add("jedi-object-add"), t.appendChild(k), t.appendChild(h), k.appendChild(A), k.appendChild(f), f.appendChild(r), r.appendChild(o), r.appendChild(l), A.appendChild(s), s.appendChild(n), r.appendChild(c), e.addProperty && (h.appendChild(y.container), h.appendChild(L), h.appendChild(document.createElement("hr"))), e.enablePropertiesToggle && (s.appendChild(u), h.appendChild(a), h.appendChild(C)), e.enableCollapseToggle && s.appendChild(b), {
      container: t,
      collapse: f,
      collapseToggle: b,
      body: r,
      actions: s,
      messages: l,
      childrenSlot: c,
      propertiesToggle: u,
      propertiesContainer: h,
      addPropertyControl: y,
      addPropertyBtn: L,
      ariaLive: a,
      propertiesActivators: C,
      arrayActions: n
    };
  }
  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   * @private
   */
  getArrayControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = this.getCardBody(), a = this.getDescription({
      textContent: e.description
    }), o = this.getMessagesSlot(), l = this.getChildrenSlot(), c = this.getBtnGroup(), h = this.getArrayBtnAdd(), u = this.getFieldset(), p = this.getLegend({
      textContent: e.title,
      id: e.id
    }), f = "collapse-" + e.id, b = this.getCollapse({
      id: f,
      startCollapsed: e.startCollapsed
    }), C = this.getCollapseToggle({
      textContent: e.title + " properties",
      id: "collapse-toggle-" + e.id,
      icon: "collapse",
      collapseId: f,
      collapse: b,
      startCollapsed: e.startCollapsed
    });
    return t.appendChild(u), u.appendChild(p), u.appendChild(b), b.appendChild(r), r.appendChild(a), r.appendChild(o), p.appendChild(s), s.appendChild(c), c.appendChild(h), s.appendChild(n), r.appendChild(l), e.enableCollapseToggle && s.appendChild(C), {
      container: t,
      collapseToggle: C,
      collapse: b,
      body: r,
      actions: s,
      messages: o,
      childrenSlot: l,
      btnGroup: c,
      addBtn: h,
      arrayActions: n
    };
  }
  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   * @private
   */
  getMultipleControl(e) {
    const t = document.createElement("div"), s = this.getCard(), n = this.getActionsSlot(), r = this.getArrayActionsSlot(), a = this.getCardHeader({
      textContent: e.title,
      titleHidden: e.titleHidden
    }), o = this.getCardBody(), l = this.getDescription({
      textContent: e.description
    }), c = this.getMessagesSlot(), h = this.getChildrenSlot(), u = this.getSwitcher({
      values: e.switcherOptionValues,
      titles: e.switcherOptionsLabels,
      id: e.id + "-switcher",
      label: e.id + "-switcher",
      titleHidden: !0,
      readOnly: e.readOnly
    });
    return u.container.classList.add("jedi-switcher"), t.appendChild(l), t.appendChild(s), s.appendChild(a), s.appendChild(o), a.appendChild(n), n.appendChild(u.container), n.appendChild(r), o.appendChild(c), o.appendChild(h), {
      container: t,
      card: s,
      header: a,
      body: o,
      actions: n,
      messages: c,
      childrenSlot: h,
      switcher: u,
      arrayActions: r
    };
  }
  /**
   * Control for NullEditor
   * @private
   */
  getNullControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("label");
    r.setAttribute("for", e.id);
    const a = document.createElement("span");
    a.textContent = e.label, e.titleHidden && this.visuallyHidden(r);
    const o = e.id + "-description", l = this.getDescription({
      textContent: e.description,
      id: o
    }), c = this.getMessagesSlot();
    return t.appendChild(r), t.appendChild(l), t.appendChild(c), t.appendChild(s), s.appendChild(n), r.appendChild(a), { container: t, label: r, labelText: a, description: l, messages: c, actions: s, arrayActions: n };
  }
  /**
   * A Textarea
   * @private
   */
  getTextareaControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("textarea");
    r.setAttribute("id", e.id), r.style.width = "100%";
    const a = document.createElement("label");
    a.setAttribute("for", e.id);
    const o = document.createElement("span");
    o.textContent = e.label, e.titleHidden && this.visuallyHidden(a);
    const l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + l;
    return r.setAttribute("aria-describedby", p), t.appendChild(a), t.appendChild(r), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(n), a.appendChild(o), { container: t, input: r, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: n };
  }
  /**
   * An Input control
   * @private
   */
  getInputControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("input");
    r.setAttribute("type", e.type), r.setAttribute("id", e.id), r.style.width = "100%";
    const a = document.createElement("label");
    a.setAttribute("for", e.id);
    const o = document.createElement("span");
    o.textContent = e.label, e.titleHidden && this.visuallyHidden(a);
    const l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + l;
    return r.setAttribute("aria-describedby", p), t.appendChild(a), t.appendChild(r), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(n), a.appendChild(o), { container: t, input: r, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: n };
  }
  /**
   * A radio group control
   * @private
   */
  getRadiosControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = this.getFieldset(), a = this.getCardBody(), o = this.getLegend({
      textContent: e.label,
      id: e.id
    }), l = e.id + "-messages", c = this.getMessagesSlot({
      id: l
    }), h = e.id + "-description", u = this.getDescription({
      textContent: e.description,
      id: h
    });
    e.titleHidden && this.visuallyHidden(o);
    const p = [], f = [], b = [], C = [];
    return e.values.forEach((y, L) => {
      const k = document.createElement("div");
      p.push(k);
      const A = document.createElement("input");
      A.setAttribute("type", "radio"), A.setAttribute("id", e.id + "-" + L), A.setAttribute("value", y), f.push(A);
      const O = l + " " + h;
      A.setAttribute("aria-describedby", O);
      const ge = document.createElement("label");
      ge.setAttribute("for", e.id + "-" + L);
      const Ne = document.createElement("span");
      C.push(Ne), e.titles && e.titles[L] && (Ne.textContent = e.titles[L]), b.push(ge);
    }), t.appendChild(r), t.appendChild(s), r.appendChild(o), r.appendChild(a), s.appendChild(n), p.forEach((y, L) => {
      a.appendChild(p[L]), y.appendChild(f[L]), y.appendChild(b[L]), b[L].appendChild(C[L]);
    }), r.appendChild(u), r.appendChild(c), {
      container: t,
      fieldset: r,
      legend: o,
      body: a,
      radios: f,
      labels: b,
      labelTexts: C,
      radioControls: p,
      description: u,
      messages: c,
      actions: s,
      arrayActions: n
    };
  }
  /**
   * A checkbox control
   * @private
   */
  getCheckboxControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("div"), a = document.createElement("input");
    a.setAttribute("type", "checkbox"), a.setAttribute("id", e.id);
    const o = document.createElement("label");
    o.setAttribute("for", e.id);
    const l = document.createElement("span");
    l.textContent = e.label, e.titleHidden && this.visuallyHidden(o);
    const c = e.id + "-description", h = this.getDescription({
      textContent: e.description,
      id: c
    }), u = e.id + "-messages", p = this.getMessagesSlot({
      id: u
    }), f = u + " " + c;
    return a.setAttribute("aria-describedby", f), t.appendChild(r), t.appendChild(s), s.appendChild(n), r.appendChild(a), r.appendChild(o), o.appendChild(l), r.appendChild(h), r.appendChild(p), { container: t, formGroup: r, input: a, label: o, labelText: l, description: h, messages: p, actions: s, arrayActions: n };
  }
  /**
   * A select control
   * @private
   */
  getSelectControl(e) {
    const t = document.createElement("div"), s = this.getActionsSlot(), n = this.getArrayActionsSlot(), r = document.createElement("select");
    r.setAttribute("id", e.id), e.values.forEach((f, b) => {
      const C = document.createElement("option");
      C.setAttribute("value", f), e.titles && e.titles[b] && (C.textContent = e.titles[b]), r.appendChild(C);
    });
    const a = document.createElement("label");
    a.setAttribute("for", e.id);
    const o = document.createElement("span");
    o.textContent = e.label, e.titleHidden && this.visuallyHidden(a);
    const l = e.id + "-description", c = this.getDescription({
      textContent: e.description,
      id: l
    }), h = e.id + "-messages", u = this.getMessagesSlot({
      id: h
    }), p = h + " " + l;
    return r.setAttribute("aria-describedby", p), t.appendChild(a), t.appendChild(r), a.appendChild(o), t.appendChild(c), t.appendChild(u), t.appendChild(s), s.appendChild(n), { container: t, input: r, label: a, labelText: o, description: c, messages: u, actions: s, arrayActions: n };
  }
  /**
   * Control to switch between multiple editors options
   * @private
   */
  getSwitcher(e) {
    const t = document.createElement("span"), s = document.createElement("select");
    s.setAttribute("id", e.id), e.values.forEach((a, o) => {
      const l = document.createElement("option");
      l.setAttribute("value", a), e.titles && e.titles[o] && (l.textContent = e.titles[o]), s.appendChild(l);
    });
    const n = document.createElement("label");
    n.setAttribute("for", e.id);
    const r = document.createElement("span");
    return r.textContent = e.label, this.visuallyHidden(n), t.appendChild(n), t.appendChild(s), n.appendChild(r), { container: t, input: s, label: n, labelText: r };
  }
  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   * @private
   */
  getAlert(e) {
    return this.getInvalidFeedback(e);
  }
  /**
   * Error messages
   * @public
   */
  getInvalidFeedback(e) {
    const t = document.createElement("div"), s = document.createElement("span"), n = document.createElement("span");
    return s.textContent = e.message, n.textContent = "⚠ ", n.classList.add("jedi-error-message"), n.setAttribute("aria-hidden", "true"), t.classList.add("jedi-error-message"), t.appendChild(n), t.appendChild(s), t;
  }
  /**
   * Container for columns
   * @private
   */
  getRow() {
    const e = document.createElement("div");
    return e.classList.add("jedi-row"), e;
  }
  /**
   * A column to contain content to a specific width
   * @private
   */
  getCol(e, t, s) {
    const n = document.createElement("div");
    return n.classList.add("jedi-col-xs-" + e), n.classList.add("jedi-col-md-" + t), s && n.classList.add("jedi-col-md-offset-" + s), n;
  }
  /**
   * Tab list is a list of links that triggers tabs visibility ne at the time
   * @private
   */
  getTabList() {
    const e = document.createElement("ul");
    return e.classList.add("jedi-nav-list"), e;
  }
  /**
   * A Tab is a wrapper for content
   * @private
   */
  getTab(e) {
    const t = document.createElement("li"), s = document.createElement("a");
    return s.classList.add("jedi-nav-link"), s.setAttribute("href", "#" + e.id), s.textContent = e.title, t.appendChild(s), { list: t, link: s };
  }
  /**
   * Wrapper for tabs
   * @private
   */
  getTabContent() {
    const e = document.createElement("div");
    return e.classList.add("tab-content"), e;
  }
  /**
   * Set tab attributes to make it toggleable
   * @private
   */
  setTabPaneAttributes(e, t, s) {
    e.setAttribute("id", s), e.classList.add("jedi-tab-pane");
  }
  /**
   * Makes an element visually hidden
   * @private
   */
  visuallyHidden(e) {
    e.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;");
  }
  /**
   * Reveals a visually hidden element
   * @private
   */
  visuallyVisible(e) {
    e.removeAttribute("style");
  }
}
class qt extends xe {
  init() {
    this.useToggleEvents = !1;
  }
  getAddPropertyButton() {
    const e = super.getAddPropertyButton();
    return e.classList.add("btn-primary"), e.classList.add("btn-block"), e;
  }
  getCollapseToggle(e) {
    const t = super.getCollapseToggle(e);
    return t.setAttribute("href", "#" + e.collapseId), t.setAttribute("data-toggle", "collapse"), t;
  }
  getCollapse(e) {
    const t = super.getCollapse(e);
    return t.classList.add("collapse"), e.startCollapsed || t.classList.add("in"), t;
  }
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("panel"), e.classList.add("panel-default"), e;
  }
  getLegend(e) {
    const t = super.getLegend(e);
    return t.classList.add("h5"), t.classList.add("panel-heading"), t.classList.add("pull-left"), t.setAttribute("style", "margin: 0; display: flex; justify-content: space-between; align-items: center;"), t;
  }
  getCard() {
    const e = super.getCard();
    return e.classList.add("panel"), e.classList.add("panel-default"), e;
  }
  getCardHeader(e) {
    const t = super.getCardHeader(e);
    return t.classList.add("panel-heading"), t.classList.add("text-right"), t;
  }
  getCardBody() {
    const e = super.getCardBody();
    return e.classList.add("panel-body"), e.style.clear = "both", e;
  }
  getBtnGroup() {
    const e = super.getBtnGroup();
    return e.classList.add("btn-group"), e;
  }
  getButton(e) {
    const t = super.getButton(e);
    return t.classList.add("btn"), t.classList.add("btn-xs"), t.classList.add("btn-default"), t;
  }
  getDescription(e) {
    const t = super.getDescription(e);
    return t.classList.add("text-muted"), t;
  }
  getTextareaControl(e) {
    const t = super.getTextareaControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("form-group"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("form-group"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { body: s, radios: n, labels: r, labelTexts: a, radioControls: o, description: l, messages: c } = t;
    return o.forEach((h, u) => {
      h.classList.add("radio"), s.appendChild(o[u]), h.appendChild(r[u]), r[u].appendChild(n[u]), r[u].appendChild(a[u]);
    }), s.appendChild(l), s.appendChild(c), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: n, input: r, label: a, labelText: o, description: l, messages: c } = t;
    return n.classList.add("checkbox"), s.appendChild(n), n.appendChild(a), a.appendChild(r), a.appendChild(o), n.appendChild(l), n.appendChild(c), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("form-group"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getAlert(e) {
    const t = super.getAlert(e);
    return t.classList.add("alert"), t.classList.add("alert-danger"), t;
  }
  getInvalidFeedback(e) {
    const t = super.getInvalidFeedback(e);
    return t.classList.add("text-danger"), t;
  }
  getRow() {
    const e = super.getRow();
    return e.classList.add("row"), e;
  }
  getCol(e, t, s) {
    const n = super.getRow();
    return n.classList.add("col-xs-" + e), n.classList.add("col-md-" + t), s && n.classList.add("col-md-offset-" + s), n;
  }
  getTabList(e) {
    const t = super.getTabList(e);
    return t.classList.add("nav"), e.type === "tabs" ? t.classList.add("nav-tabs") : t.classList.add("nav-pills"), t.classList.add("nav-stacked"), e.stacked === !1 && t.classList.remove("nav-stacked"), t;
  }
  getTab(e) {
    const t = super.getTab(e);
    return e.active && t.list.classList.add("active"), t.link.setAttribute("data-toggle", "tab"), t;
  }
  setTabPaneAttributes(e, t, s) {
    super.setTabPaneAttributes(e, t, s), e.classList.add("tab-pane"), t && (e.classList.add("in"), e.classList.add("active"));
  }
  visuallyHidden(e) {
    e.classList.add("sr-only");
  }
  visuallyVisible(e) {
    e.classList.remove("sr-only");
  }
}
class Nt extends xe {
  init() {
    this.useToggleEvents = !1;
  }
  getAddPropertyButton() {
    const e = super.getAddPropertyButton();
    return e.classList.add("btn-primary"), e.classList.add("btn-block"), e;
  }
  getCollapseToggle(e) {
    const t = super.getCollapseToggle(e);
    return t.setAttribute("href", "#" + e.collapseId), t.setAttribute("data-toggle", "collapse"), t;
  }
  getCollapse(e) {
    const t = super.getCollapse(e);
    return t.classList.add("collapse"), e.startCollapsed || t.classList.add("show"), t;
  }
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getLegend(e) {
    const t = super.getLegend(e);
    return t.classList.add("h6"), t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-between"), t.classList.add("align-items-center"), t.classList.add("float-left"), t.classList.add("py-2"), t;
  }
  getCard() {
    const e = super.getCard();
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getCardHeader(e) {
    const t = super.getCardHeader(e);
    return t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-end"), t.classList.add("align-items-center"), t.classList.add("py-1"), t;
  }
  getCardBody() {
    const e = super.getCardBody();
    return e.classList.add("card-body"), e.classList.add("pb-0"), e;
  }
  getBtnGroup() {
    const e = super.getBtnGroup();
    return e.classList.add("btn-group"), e;
  }
  getButton(e) {
    const t = super.getButton(e);
    return t.classList.add("btn"), t.classList.add("btn-sm"), t;
  }
  getDescription(e) {
    const t = super.getDescription(e);
    return t.classList.add("text-muted"), t;
  }
  getTextareaControl(e) {
    const t = super.getTextareaControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("form-group"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("form-group"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { container: s, body: n, radios: r, labels: a, labelTexts: o, radioControls: l, description: c, messages: h } = t;
    return s.classList.add("form-group"), l.forEach((u, p) => {
      u.classList.add("form-check"), r[p].classList.add("form-check-input"), a[p].classList.add("form-check-label"), n.appendChild(l[p]), u.appendChild(r[p]), u.appendChild(a[p]), a[p].appendChild(o[p]);
    }), n.appendChild(c), n.appendChild(h), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: n, input: r, label: a, description: o, messages: l } = t;
    return n.classList.add("form-group"), n.classList.add("form-check"), r.classList.add("form-check-input"), a.classList.add("form-check-label"), s.appendChild(n), n.appendChild(r), n.appendChild(a), n.appendChild(o), n.appendChild(l), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: n } = t;
    return s.classList.add("form-group"), n.classList.add("form-control"), t;
  }
  getAlert(e) {
    const t = super.getAlert(e);
    return t.classList.add("alert"), t.classList.add("alert-danger"), t;
  }
  getInvalidFeedback(e) {
    const t = super.getInvalidFeedback(e);
    return t.classList.add("text-danger"), t.classList.add("form-text"), t.classList.add("d-block"), t;
  }
  getColumnClass(e, t) {
    return "col-" + e + "-" + t;
  }
  getRow() {
    const e = super.getRow();
    return e.classList.add("row"), e;
  }
  getCol(e, t, s) {
    const n = super.getRow(e, t, s);
    return n.classList.add("col-" + e), n.classList.add("col-md-" + t), s && n.classList.add("offset-md-" + s), n;
  }
  getTabList(e) {
    const t = super.getTabList();
    return t.classList.add("nav"), e.type === "tabs" ? t.classList.add("nav-tabs") : t.classList.add("nav-pills"), t.classList.add("flex-column"), e.stacked === !1 && t.classList.remove("flex-column"), t;
  }
  getTab(e) {
    const t = super.getTab(e);
    return t.list.classList.add("nav-item"), t.link.classList.add("nav-link"), t.link.setAttribute("data-toggle", "tab"), e.active && t.link.classList.add("active"), t;
  }
  setTabPaneAttributes(e, t, s) {
    super.setTabPaneAttributes(e, t, s), e.classList.add("tab-pane"), t && e.classList.add("active");
  }
  visuallyHidden(e) {
    e.classList.add("sr-only");
  }
  visuallyVisible(e) {
    e.classList.remove("sr-only");
  }
}
class Dt extends xe {
  init() {
    this.useToggleEvents = !1;
  }
  getAddPropertyButton() {
    const e = super.getAddPropertyButton();
    return e.classList.add("btn-primary"), e.classList.add("w-100"), e;
  }
  getCollapseToggle(e) {
    const t = super.getCollapseToggle(e);
    return t.setAttribute("href", "#" + e.collapseId), t.setAttribute("data-bs-toggle", "collapse"), t;
  }
  getCollapse(e) {
    const t = super.getCollapse(e);
    return t.classList.add("collapse"), e.startCollapsed || t.classList.add("show"), t;
  }
  getFieldset() {
    const e = document.createElement("fieldset");
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getLegend(e) {
    const t = super.getLegend(e);
    return t.classList.add("h6"), t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-between"), t.classList.add("align-items-center"), t.classList.add("py-2"), t;
  }
  getCard() {
    const e = super.getCard();
    return e.classList.add("card"), e.classList.add("mb-3"), e;
  }
  getCardHeader(e) {
    const t = super.getCardHeader(e);
    return t.classList.add("card-header"), t.classList.add("d-flex"), t.classList.add("justify-content-end"), t.classList.add("align-items-center"), t.classList.add("py-1"), t;
  }
  getCardBody() {
    const e = super.getCardBody();
    return e.classList.add("card-body"), e.classList.add("pb-0"), e;
  }
  getControlSlot() {
    const e = super.getControlSlot();
    return e.classList.add("mb-3"), e;
  }
  getBtnGroup() {
    const e = super.getBtnGroup();
    return e.classList.add("btn-group"), e;
  }
  getButton(e) {
    const t = super.getButton(e);
    return t.classList.add("btn"), t.classList.add("btn-sm"), t;
  }
  getDescription(e) {
    const t = super.getDescription(e);
    return t.classList.add("text-muted"), t;
  }
  getTextareaControl(e) {
    const t = super.getTextareaControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("mb-3"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getInputControl(e) {
    const t = super.getInputControl(e), { container: s, input: n, label: r } = t;
    return s.classList.add("mb-3"), n.classList.add("form-control"), e.titleHidden && this.visuallyHidden(r), t;
  }
  getRadiosControl(e) {
    const t = super.getRadiosControl(e), { container: s, body: n, radios: r, labels: a, labelTexts: o, radioControls: l, description: c, messages: h } = t;
    return s.classList.add("mb-3"), l.forEach((u, p) => {
      u.classList.add("form-check"), r[p].classList.add("form-check-input"), a[p].classList.add("form-check-label"), n.appendChild(l[p]), u.appendChild(r[p]), u.appendChild(a[p]), a[p].appendChild(o[p]);
    }), n.appendChild(c), n.appendChild(h), t;
  }
  getCheckboxControl(e) {
    const t = super.getCheckboxControl(e), { container: s, formGroup: n, input: r, label: a, description: o, messages: l } = t;
    return s.classList.add("mb-3"), n.classList.add("form-check"), r.classList.add("form-check-input"), a.classList.add("form-check-label"), e.titleHidden && this.visuallyHidden(a), s.appendChild(n), n.appendChild(r), n.appendChild(a), n.appendChild(o), n.appendChild(l), t;
  }
  getSelectControl(e) {
    const t = super.getSelectControl(e), { container: s, input: n } = t;
    return s.classList.add("mb-3"), n.classList.add("form-select"), t;
  }
  getAlert(e) {
    const t = super.getAlert(e);
    return t.classList.add("alert"), t.classList.add("alert-danger"), t;
  }
  getInvalidFeedback(e) {
    const t = super.getInvalidFeedback(e);
    return t.classList.add("text-danger"), t.classList.add("d-block"), t.classList.add("form-text"), t.classList.add("form-text"), t;
  }
  getRow() {
    const e = super.getRow();
    return e.classList.add("row"), e;
  }
  getCol(e, t, s) {
    const n = super.getRow(e, t, s);
    return n.classList.add("col-" + e), n.classList.add("col-md-" + t), s && n.classList.add("offset-md-" + s), n;
  }
  getTabList(e) {
    const t = super.getTabList(e);
    return t.classList.add("nav"), e.type === "tabs" ? t.classList.add("nav-tabs") : t.classList.add("nav-pills"), t.classList.add("flex-column"), e.stacked === !1 && t.classList.remove("flex-column"), t;
  }
  getTab(e) {
    const t = super.getTab(e);
    return t.list.classList.add("nav-item"), t.link.classList.add("nav-link"), t.link.setAttribute("data-bs-toggle", "tab"), e.active && t.link.classList.add("active"), t;
  }
  setTabPaneAttributes(e, t, s) {
    super.setTabPaneAttributes(e, t, s), e.classList.add("tab-pane"), t && e.classList.add("active");
  }
  visuallyHidden(e) {
    e.classList.add("visually-hidden");
  }
  visuallyVisible(e) {
    e.classList.remove("visually-hidden");
  }
}
class F {
  constructor(e) {
    if (this.instance = e, this.theme = null, this.control = null, this.disabled = !1, this.readOnly = this.instance.isReadOnly(), this.init(), this.build(), this.coerceValue(), this.addEventListeners(), this.setContainerAttributes(), this.refreshUI(), this.instance.jedi.options.showErrors === "always" || m(this.instance.schema, "showErrors") === "always") {
      const s = this.instance.getErrors();
      this.showValidationErrors(s);
    }
    this.instance.on("set-value", () => {
      this.refreshUI();
      const s = this.instance.getErrors();
      this.showValidationErrors(s);
    }), this.instance.on("change", () => {
      this.refreshUI();
      const s = this.instance.getErrors();
      this.showValidationErrors(s);
    });
  }
  /**
   * Initializes the editor
   * @private
   */
  init() {
    let e = null;
    if (d(this.instance.jedi.options.iconLib))
      switch (this.instance.jedi.options.iconLib) {
        case "glyphicons":
          e = kt;
          break;
        case "bootstrap-icons":
          e = Mt;
          break;
        case "fontawesome3":
          e = Vt;
          break;
        case "fontawesome4":
          e = Rt;
          break;
        case "fontawesome5":
          e = Ht;
          break;
        case "fontawesome6":
          e = Bt;
          break;
      }
    switch (this.instance.jedi.options.theme) {
      case "bootstrap3":
        this.theme = new qt(e);
        break;
      case "bootstrap4":
        this.theme = new Nt(e);
        break;
      case "bootstrap5":
        this.theme = new Dt(e);
        break;
      default:
        this.theme = new xe(e);
    }
  }
  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-path", this.instance.path), this.control.container.setAttribute("data-type", H(this.instance.schema));
  }
  /**
   * Builds the editor control and appends it to the editor container
   * @private
   */
  build() {
  }
  /**
   * Updates the value of the instance by making assumptions based on constrains
   */
  coerceValue() {
    const e = V(this.instance.schema);
    d(e) && !e.includes(this.instance.getValue()) && d(e[0]) && this.instance.setValue(e[0], !1);
  }
  /**
   * Add event listeners to ui elements
   * @private
   */
  addEventListeners() {
  }
  /**
   * Shows validation messages in the editor container.
   * @private
   */
  showValidationErrors(e) {
    if (this.instance.jedi.options.showErrors === "never" || m(this.instance.schema, "showErrors") === "never")
      return;
    this.control.messages.innerHTML = "";
    const s = I(this.instance.schema) || this.instance.getKey();
    e.forEach((n) => {
      n.messages.forEach((r) => {
        const a = this.getInvalidFeedback({
          message: s + ": " + r
        });
        this.control.messages.appendChild(a);
      });
    });
  }
  /**
   * Get an error message container
   * @private
   */
  getInvalidFeedback(e) {
    return this.theme.getInvalidFeedback(e);
  }
  /**
   * Disables the editor
   */
  disable() {
    this.disabled = !0, this.refreshUI();
  }
  /**
   * Enables the editor
   */
  enable() {
    this.disabled = !1, this.refreshUI();
  }
  /**
   * Updates control UI when its state changes
   * @private
   */
  refreshUI() {
    this.refreshInteractiveElements();
  }
  refreshInteractiveElements() {
    this.control.container.querySelectorAll("button, input, select, textarea").forEach((t) => {
      this.disabled || this.readOnly ? t.setAttribute("disabled", "") : t.removeAttribute("disabled", "");
    });
  }
  /**
   * Transforms the input value if necessary before value set
   * @private
   */
  sanitize(e) {
    return e;
  }
  /**
   * Destroys the editor
   * @private
   */
  destroy() {
    this.control.container && this.control.container.parentNode && this.control.container.parentNode.removeChild(this.control.container), Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
}
class Ye extends F {
  build() {
    this.control = this.theme.getMultipleControl({
      title: "Options",
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: w(this.instance.path),
      description: j(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    });
  }
  addEventListeners() {
    this.control.switcher.input.addEventListener("change", () => {
      const e = Number(this.control.switcher.input.value);
      this.instance.switchInstance(e);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.childrenSlot.innerHTML = "", this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container), this.control.switcher.input.value = this.instance.index, this.disabled || this.instance.isReadOnly() ? this.instance.activeInstance.ui.disable() : this.instance.activeInstance.ui.enable();
  }
  getInvalidFeedback(e) {
    return this.theme.getAlert(e);
  }
}
class Ft extends D {
  setUI() {
    this.ui = new Ye(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.activeInstanceChanged = !0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.ifThenElseShemas = [], this.traverseSchema(this.schema), delete this.schema.if, delete this.schema.then, delete this.schema.else;
    let e = 0;
    this.ifThenElseShemas.forEach((r) => {
      d(r.then) && (this.schemas.push(K({}, M(this.schema), r.then)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(r.then)), e++), d(r.else) && (this.schemas.push(K({}, M(this.schema), r.else)), this.switcherOptionValues.push(e), this.switcherOptionsLabels.push(JSON.stringify(r.else)), e++);
    });
    const t = M(this.schema);
    delete t.if, delete t.then, delete t.else;
    const s = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path,
      parent: this.parent
    });
    this.schemas.forEach((r) => {
      const a = this.jedi.createInstance({
        jedi: this.jedi,
        schema: r,
        path: this.path,
        parent: this.parent
      });
      a.unregister(), a.on("change", () => {
        const o = this.activeInstance.getValue();
        this.getFittestIndex(o) !== this.index ? this.setValue(o) : (this.value = this.activeInstance.getValue(), this.emit("change"));
      }), this.instances.push(a), this.register();
    }), this.on("set-value", (r) => {
      this.instances.forEach((l) => {
        const c = l.getValue();
        let h = r;
        g(c) && g(h) && (h = it(c, h)), l.setValue(h, !1);
      });
      const a = this.getFittestIndex(r);
      a !== this.index && (this.switchInstance(a), this.emit("change"));
    }), this.value = s.getValue(), s.destroy();
    const n = this.getFittestIndex(this.value);
    this.switchInstance(n);
  }
  switchInstance(e) {
    this.index = e, this.activeInstance = this.instances[this.index], this.value = this.activeInstance.getValue(), this.emit("change");
  }
  traverseSchema(e) {
    const t = Te(e);
    if (d(t)) {
      const s = Ve(e), n = Oe(e);
      this.ifThenElseShemas.push({
        if: t,
        then: d(s) ? s : {}
      }), this.ifThenElseShemas.push({
        if: t,
        else: d(n) ? n : {}
      });
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(e) {
    let t = this.index;
    return this.ifThenElseShemas.forEach((s, n) => {
      const r = new S({
        schema: s.if,
        data: e
      }), a = r.getErrors();
      r.destroy(), a.length === 0 && s.then && (t = n), a.length > 0 && s.else && (t = n);
    }), t;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
  getAllOfCombinations(e) {
    const t = [], s = (r, a) => ({ ...r, ...a }), n = (r, a) => {
      if (a.length === 0) {
        t.push(r);
        return;
      }
      const o = a[0];
      n(s(r, o), a.slice(1)), n(r, a.slice(1));
    };
    for (let r = 0; r < e.length; r++)
      n(e[r], e.slice(r + 1));
    return t.sort((r, a) => Object.keys(r).length - Object.keys(a).length), t;
  }
}
class Ut extends D {
  setUI() {
    this.ui = new Ye(this);
  }
  prepare() {
    this.instances = [], this.activeInstance = null, this.lastIndex = 0, this.index = 0, this.schemas = [], this.switcherOptionValues = [], this.switcherOptionsLabels = [], this.on("set-value", () => {
      this.onSetValue();
    });
    const e = H(this.schema);
    if (d($(this.schema)) || d(z(this.schema))) {
      const s = d($(this.schema)) ? $(this.schema) : z(this.schema), n = M(this.schema);
      delete n.anyOf, delete n.oneOf, delete n.options, s.forEach((r, a) => {
        r = { ...n, ...r }, this.jedi.refParser && (r = this.jedi.refParser.expand(r));
        let o = "Option-" + (a + 1);
        const l = m(r, "switcherTitle"), c = I(r);
        d(c) && (o = c), d(l) && (o = l), this.switcherOptionValues.push(a), this.switcherOptionsLabels.push(o), this.schemas.push(r);
      });
    } else if (x(e))
      e.forEach((s, n) => {
        const r = K(this.schema), a = {
          ...r,
          type: s,
          title: s[0].toUpperCase() + s.slice(1)
        };
        d(r.title) && (a.title = r.title), this.switcherOptionValues.push(n), this.switcherOptionsLabels.push(s.charAt(0).toUpperCase() + s.slice(1)), this.schemas.push(a);
      });
    else if (e === "any" || !e) {
      const s = M(this.schema);
      this.schemas = [
        { ...s, type: "object" },
        { ...s, type: "array" },
        { ...s, type: "string" },
        { ...s, type: "number" },
        { ...s, type: "integer" },
        { ...s, type: "boolean" },
        { ...s, type: "null" }
      ], this.schemas.forEach((n, r) => {
        this.switcherOptionValues.push(r);
      }), this.switcherOptionsLabels = [
        "Object",
        "Array",
        "String",
        "Number",
        "Integer",
        "Boolean",
        "Null"
      ];
    }
    this.schemas.forEach((s) => {
      const n = this.jedi.createInstance({
        jedi: this.jedi,
        schema: s,
        path: this.path,
        parent: this.parent,
        value: M(this.value)
      });
      d(this.value) && n.setValue(this.value, !1), n.unregister(), n.off("change"), n.on("change", () => {
        this.value = this.activeInstance.getValue(), this.emit("change");
      }), this.instances.push(n), this.register();
    });
    const t = this.getFittestIndex(this.value);
    this.switchInstance(t, this.value);
  }
  switchInstance(e, t) {
    this.lastIndex = this.index, this.index = e, this.activeInstance = this.instances[e], d(t) && this.activeInstance.setValue(t, !1), this.setValue(this.activeInstance.getValue());
  }
  onSetValue() {
    if (Pe(this.activeInstance.getValue(), this.value)) {
      const e = this.getFittestIndex(this.value);
      this.switchInstance(e, this.value);
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(e) {
    let t = 0, s, n;
    for (const r of this.instances) {
      const a = this.jedi.validator.getErrors(e, r.schema, r.getKey(), r.path);
      (U(s) || U(n)) && (s = t, n = a), a.length < n.length && (s = t, n = a), t++;
    }
    return s;
  }
  destroy() {
    this.instances.forEach((e) => {
      e.destroy();
    }), super.destroy();
  }
}
class Re extends F {
  build() {
    this.control = this.theme.getCheckboxControl({
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.checked);
    });
  }
  sanitize(e) {
    return !!e;
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.checked = this.instance.getValue();
  }
}
class $t extends Re {
  build() {
    this.control = this.theme.getRadiosControl({
      values: ["false", "true"],
      titles: m(this.instance.schema, "enumTitles") || ["false", "true"],
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((e) => {
      e.addEventListener("change", () => {
        const t = e.value === "true";
        this.instance.setValue(t);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((e) => {
      const t = e.value === "true";
      e.checked = t === this.instance.getValue();
    });
  }
}
class Kt extends Re {
  build() {
    this.control = this.theme.getSelectControl({
      values: ["false", "true"],
      titles: m(this.instance.schema, "enumTitles") || ["false", "true"],
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.control.input.value === "true";
      this.instance.setValue(e);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue() === !0 ? "true" : "false";
  }
}
class zt extends D {
  setUI() {
    const e = H(this.schema), t = q(this.schema);
    e === "boolean" && t === "radio" ? this.ui = new $t(this) : e === "boolean" && t === "select" ? this.ui = new Kt(this) : e === "boolean" && (this.ui = new Re(this));
  }
}
class He extends F {
  build() {
    this.propertyActivators = {};
    const e = this.instance.schema.options || {};
    let t = !0;
    const s = Se(this.instance.schema);
    d(s) && s === !1 && (t = !1);
    let n = !1;
    d(this.instance.jedi.options.enablePropertiesToggle) && (n = this.instance.jedi.options.enablePropertiesToggle), d(e.enablePropertiesToggle) && (n = e.enablePropertiesToggle), this.control = this.theme.getObjectControl({
      title: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: w(this.instance.path),
      description: j(this.instance.schema),
      enablePropertiesToggle: n,
      addProperty: t,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || m(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || m(this.instance.schema, "startCollapsed")
    });
  }
  addEventListeners() {
    this.control.addPropertyBtn.addEventListener("click", () => {
      const e = this.control.addPropertyControl.input.value.split(" ").join("");
      if (e.length === 0 || d(this.instance.value[e]))
        return;
      let n = {};
      const r = Se(this.instance.schema);
      d(r) && (n = r);
      const a = this.instance.createChild(n, e);
      a.activate(), this.instance.properties[e] = { schema: n }, this.instance.setValue(this.instance.value), this.control.addPropertyControl.input.value = "";
      const o = this.control.ariaLive;
      o.innerHTML = "";
      const l = I(a.schema), c = d(l) ? l : e, h = this.theme.getAriaLiveMessage();
      h.textContent = c + " field was added to the form", o.appendChild(h), this.control.propertiesContainer.close(), this.control.propertiesContainer.showModal();
    });
  }
  sanitize(e) {
    return g(e) ? e : {};
  }
  getInvalidFeedback(e) {
    return this.theme.getAlert(e);
  }
  refreshPropertiesSlot() {
    const e = m(this.instance.schema, "enablePropertiesToggle");
    (we(this.instance.jedi.options.enablePropertiesToggle, !0) || we(e, !0)) && Object.keys(this.instance.properties).forEach((t) => {
      const s = this.instance.isRequired(t), n = this.instance.isDependentRequired(t), r = !s && !n, a = this.propertyActivators[t], o = this.control.ariaLive, l = this.instance.properties[t].schema, c = I(l), h = this.instance.path + this.instance.jedi.pathSeparator + t, u = w(h) + "-activator", p = d(c) ? c : t;
      if (r && !a) {
        const b = this.theme.getCheckboxControl({
          id: u,
          label: p,
          titleHidden: !1
        }), C = b.input;
        this.propertyActivators[t] = C, C.addEventListener("change", () => {
          o.innerHTML = "";
          const y = this.theme.getAriaLiveMessage();
          C.checked ? (this.instance.getChild(t) || this.instance.createChild(l, t), this.instance.getChild(t).activate(), y.textContent = p + " field was added to the form", o.appendChild(y)) : (this.instance.getChild(t).deactivate(), y.textContent = p + " field was removed from the form", o.appendChild(y)), this.control.propertiesContainer.close(), this.control.propertiesContainer.showModal();
        }), this.control.propertiesActivators.appendChild(b.container);
      }
      const f = this.propertyActivators[t];
      f && (f.disabled = this.disabled, f.checked = N(this.instance.getValue(), t));
    });
  }
  refreshEditors() {
    this.instance.children.forEach((e) => {
      e.isActive ? (e.ui.control.container.parentNode === null && this.control.childrenSlot.appendChild(e.ui.control.container), this.disabled || this.instance.isReadOnly() ? e.ui.disable() : e.ui.enable()) : e.ui.control.container.parentNode && e.ui.control.container.parentNode.removeChild(e.ui.control.container);
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.refreshPropertiesSlot(), this.refreshEditors();
  }
}
class Jt extends He {
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    let e = this.theme.getRow();
    this.control.childrenSlot.appendChild(e), this.instance.children.forEach((t) => {
      if (t.isActive) {
        const s = m(t.schema, "columns") || 12, n = m(t.schema, "offset") || 0, r = this.theme.getCol(12, s, n);
        m(t.schema, "newRow") === !0 && (e = this.theme.getRow(), this.control.childrenSlot.appendChild(e)), e.appendChild(r), r.appendChild(t.ui.control.container), this.disabled || this.instance.isReadOnly() ? t.ui.disable() : t.ui.enable();
      }
    });
  }
}
class Gt extends He {
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  refreshEditors() {
    for (; this.control.childrenSlot.firstChild; )
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    const e = this.instance.schema["x-control-cols"], t = this.instance.schema["x-control-stacked"], s = this.instance.schema["x-control-variant"], n = this.theme.getRow(), r = d(e) ? e : 3, a = this.theme.getCol(12, r), o = this.theme.getCol(12, 12 - r), l = this.theme.getTabContent(), c = this.theme.getTabList({
      stacked: d(t) ? t : !1,
      type: d(s) ? s : "pils"
    });
    this.control.childrenSlot.appendChild(n), n.appendChild(a), n.appendChild(o), a.appendChild(c), o.appendChild(l), this.instance.children.forEach((h, u) => {
      if (h.isActive) {
        const p = u === this.activeTabIndex, f = w(h.path), b = I(h.schema), C = this.theme.getTab({
          title: d(b) ? b : h.getKey(),
          id: f,
          active: p
        });
        C.list.addEventListener("click", () => {
          this.activeTabIndex = u;
        }), this.theme.setTabPaneAttributes(h.ui.control.container, p, f), c.appendChild(C.list), l.appendChild(h.ui.control.container), this.disabled || this.instance.isReadOnly() ? h.ui.disable() : h.ui.enable();
      }
    });
  }
}
class _t extends D {
  setUI() {
    const e = H(this.schema), t = q(this.schema), s = this.schema["x-control"];
    e === "object" && t === "grid" ? this.ui = new Jt(this) : e === "object" && s === "nav" ? this.ui = new Gt(this) : this.ui = new He(this);
  }
  prepare() {
    this.properties = {};
    const e = Me(this.schema);
    d(e) && Object.keys(e).forEach((t) => {
      const s = e[t];
      this.properties[t] = { schema: s };
      let n = !0;
      const r = this.jedi.options.deactivateNonRequired, a = m(this.schema, "deactivateNonRequired"), o = m(s, "deactivateNonRequired");
      this.isNotRequired(t) && d(r) && r === !0 && (n = !1), this.isNotRequired(t) && d(a) && a === !0 && (n = !1), this.isNotRequired(t) && d(o) && o === !0 && (n = !1), n && this.createChild(s, t);
    }), this.refreshInstances(), this.on("set-value", () => {
      this.refreshInstances();
    });
  }
  /**
   * Returns true if the property is required
   */
  isRequired(e) {
    const t = We(this.schema);
    return d(t) && t.includes(e);
  }
  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired(e) {
    const t = ze(this.schema);
    if (d(t)) {
      let s = [];
      return Object.keys(t).forEach((n) => {
        d(this.value[n]) && (s = t[n].filter((a) => !N(this.value, a)));
      }), s.includes(e);
    }
    return !1;
  }
  createChild(e, t, s) {
    const n = this.jedi.createInstance({
      jedi: this.jedi,
      schema: e,
      path: this.path + this.jedi.pathSeparator + t,
      parent: this,
      value: M(s)
    });
    this.children.push(n), this.value[t] = n.getValue();
    const r = this.jedi.options.deactivateNonRequired || m(this.schema, "deactivateNonRequired");
    return this.isNotRequired(t) && d(r) && r === !0 && n.deactivate(), n;
  }
  isNotRequired(e) {
    return !this.isRequired(e) && !this.isDependentRequired(e);
  }
  deleteChild(e) {
    for (let t = this.children.length - 1; t >= 0; t--) {
      const s = this.children[t];
      s.getKey() === e && (s.destroy(), this.children.splice(t, 1), this.onChildChange());
    }
  }
  getChild(e) {
    return this.children.find((t) => e === t.getKey().split(this.jedi.pathSeparator).pop());
  }
  onChildChange() {
    const e = {};
    this.children.forEach((t) => {
      t.isActive && (e[t.getKey()] = t.getValue());
    }), this.value = e, this.emit("change");
  }
  refreshInstances() {
    const e = this.getValue();
    if (g(e)) {
      Object.keys(e).forEach((t) => {
        const s = this.getChild(t);
        if (s) {
          s.activate();
          const n = s.getValue(), r = e[s.getKey()];
          Pe(n, r) && s.setValue(r, !1);
        } else
          this.createChild({}, t, e[t]);
      });
      for (let t = this.children.length - 1; t >= 0; t--) {
        const s = this.children[t], n = s.getKey();
        U(e[n]) && (this.getChild(n) ? s.deactivate() : this.deleteChild(n));
      }
    }
  }
}
class Ze extends F {
  build() {
    this.control = this.theme.getArrayControl({
      title: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      id: w(this.instance.path),
      description: j(this.instance.schema),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || m(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || m(this.instance.schema, "startCollapsed")
    });
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.instance.addItem();
    });
  }
  getInvalidFeedback(e) {
    return this.theme.getAlert(e);
  }
  sanitize(e) {
    return x(e) ? e : [];
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = Ge(this.instance.schema), t = _e(this.instance.schema);
    d(e) && e === this.instance.value.length && this.control.addBtn.setAttribute("disabled", ""), this.control.childrenSlot.innerHTML = "", this.instance.children.forEach((s) => {
      const n = Number(s.getKey()), r = this.theme.getDeleteItemBtn(), a = this.theme.getMoveUpItemBtn(), o = this.theme.getMoveDownItemBtn(), l = this.theme.getBtnGroup();
      s.ui.control.arrayActions.innerHTML = "", s.ui.control.arrayActions.appendChild(l), l.appendChild(r), l.appendChild(a), l.appendChild(o), this.control.childrenSlot.appendChild(s.ui.control.container), r.addEventListener("click", () => {
        const c = Number(s.path.split(this.instance.jedi.pathSeparator).pop());
        this.instance.deleteItem(c);
      }), a.addEventListener("click", () => {
        const c = n - 1;
        this.instance.move(n, c);
      }), o.addEventListener("click", () => {
        const c = n + 1;
        this.instance.move(n, c);
      }), this.disabled || this.instance.isReadOnly() ? s.ui.disable() : s.ui.enable(), d(t) && this.instance.value.length <= t && r.setAttribute("disabled", "");
    });
  }
}
class Wt extends Ze {
  init() {
    super.init(), this.activeTabIndex = 0;
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeTabIndex = this.instance.value.length, this.instance.addItem();
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.childrenSlot.innerHTML = "";
    const e = m(this.instance.schema, "navCols"), t = m(this.instance.schema, "navStacked"), s = m(this.instance.schema, "navType"), n = this.theme.getRow(), r = d(e) ? e : 3, a = this.theme.getCol(12, r), o = this.theme.getCol(12, 12 - r), l = this.theme.getTabContent(), c = this.theme.getTabList({
      stacked: d(t) ? t : !1,
      type: d(s) ? s : "pils"
    });
    this.control.childrenSlot.appendChild(n), n.appendChild(a), n.appendChild(o), a.appendChild(c), o.appendChild(l), this.instance.children.forEach((h, u) => {
      const p = this.theme.getDeleteItemBtn(), f = this.theme.getMoveUpItemBtn(), b = this.theme.getMoveDownItemBtn();
      h.ui.control.arrayActions.innerHTML = "", h.ui.control.arrayActions.appendChild(p), h.ui.control.arrayActions.appendChild(f), h.ui.control.arrayActions.appendChild(b), this.control.childrenSlot.appendChild(h.ui.control.container);
      let C;
      const y = m(this.instance.schema, "itemTemplate");
      if (y) {
        const O = y, ge = {
          i0: u,
          i1: u + 1,
          value: h.getValue()
        };
        C = E(O, ge);
      } else {
        const O = I(h.schema);
        C = d(O) ? O + " " + (u + 1) : h.getKey();
      }
      p.addEventListener("click", () => {
        this.activeTabIndex = rt(u - 1, 0, this.instance.value.length - 1), this.instance.deleteItem(u);
      }), f.addEventListener("click", () => {
        const O = u - 1;
        this.activeTabIndex = O, this.instance.move(u, O);
      }), b.addEventListener("click", () => {
        const O = u + 1;
        this.activeTabIndex = O, this.instance.move(u, O);
      });
      const L = u === this.activeTabIndex, k = w(h.path), A = this.theme.getTab({
        title: C,
        id: k,
        active: L
      });
      A.list.addEventListener("click", () => {
        this.activeTabIndex = u;
      }), this.theme.setTabPaneAttributes(h.ui.control.container, L, k), c.appendChild(A.list), l.appendChild(h.ui.control.container), this.disabled || this.instance.isReadOnly() ? h.ui.disable() : h.ui.enable(), u === 0 && f.setAttribute("disabled", ""), this.instance.value.length - 1 === u && b.setAttribute("disabled", "");
    });
  }
}
class Qt extends D {
  setUI() {
    const e = H(this.schema), t = q(this.schema);
    e === "array" && t === "nav" ? this.ui = new Wt(this) : this.ui = new Ze(this);
  }
  prepare() {
    this.refreshChildren(), this.on("set-value", () => {
      this.refreshChildren();
    });
  }
  createItemInstance(e) {
    let t;
    const s = this.children.length, n = Je(this.schema), r = ke(this.schema);
    t = d(n) ? n : {}, d(r) && d(r[s]) && (t = r[s]);
    const o = this.jedi.createInstance({
      jedi: this.jedi,
      schema: t,
      path: this.path + this.jedi.pathSeparator + s,
      parent: this,
      value: M(e)
    });
    return d(e) && o.setValue(e, !1), o;
  }
  move(e, t) {
    const s = M(this.getValue()), n = s[e];
    s.splice(e, 1), s.splice(t, 0, n), this.setValue(s);
  }
  addItem() {
    const e = this.createItemInstance(), t = M(this.getValue());
    t.push(e.getValue()), e.destroy(), this.setValue(t);
  }
  deleteItem(e) {
    const s = M(this.getValue()).filter((n, r) => r !== e);
    this.setValue(s);
  }
  onChildChange() {
    const e = [];
    this.children.forEach((t) => {
      e.push(t.getValue());
    }), this.value = e, this.emit("change");
  }
  refreshChildren() {
    this.children = [];
    const e = this.getValue();
    x(e) && e.forEach((t) => {
      const s = this.createItemInstance(t);
      this.children.push(s);
    });
  }
}
class Be extends F {
  build() {
    const e = ["hidden", "color", "date", "datetime-local", "email", "number", "month", "password", "search", "time", "tel", "text", "textarea", "url", "week"], t = q(this.instance.schema);
    this.control = this.theme.getInputControl({
      type: e.includes(t) ? t : "text",
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || t === "hidden",
      description: j(this.instance.schema)
    }), t === "color" && this.instance.value.length === 0 && this.instance.setValue("#000000", !1);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  sanitize(e) {
    return String(e);
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class Xt extends Be {
  build() {
    this.control = this.theme.getRadiosControl({
      values: V(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || V(this.instance.schema),
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((e) => {
      e.addEventListener("change", () => {
        this.instance.setValue(e.value);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((e) => {
      e.checked = e.value === this.instance.getValue();
    });
  }
}
class Yt extends Be {
  build() {
    this.control = this.theme.getSelectControl({
      values: V(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || V(this.instance.schema),
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    }), this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
}
class Zt extends F {
  build() {
    this.control = this.theme.getTextareaControl({
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || q(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value);
    });
  }
  sanitize(e) {
    return String(e);
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.input.value = this.instance.getValue();
  }
}
class es extends D {
  setUI() {
    const e = H(this.schema), t = V(this.schema), s = q(this.schema);
    e === "string" && d(t) && s === "radio" ? this.ui = new Xt(this) : e === "string" && s === "textarea" ? this.ui = new Zt(this) : e === "string" && d(t) ? this.ui = new Yt(this) : e === "string" && (this.ui = new Be(this));
  }
}
class qe extends F {
  build() {
    this.control = this.theme.getInputControl({
      type: "number",
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || q(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
  sanitize(e) {
    return H(this.instance.schema) === "integer" ? Math.floor(Number(e)) : Number(e);
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const e = this.instance.getValue();
    T(e) && (this.control.input.value = this.instance.getValue());
  }
}
class ts extends qe {
  build() {
    this.control = this.theme.getRadiosControl({
      values: V(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || V(this.instance.schema),
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.radios.forEach((e) => {
      e.addEventListener("change", () => {
        const t = this.sanitize(e.value);
        this.instance.setValue(t);
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements(), this.control.radios.forEach((e) => {
      e.checked = Number(e.value) === Number(this.instance.getValue());
    });
  }
}
class ss extends qe {
  build() {
    this.control = this.theme.getSelectControl({
      values: V(this.instance.schema),
      titles: m(this.instance.schema, "enumTitles") || V(this.instance.schema),
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden"),
      description: j(this.instance.schema)
    });
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const e = this.sanitize(this.control.input.value);
      this.instance.setValue(e);
    });
  }
}
class is extends D {
  setUI() {
    const e = H(this.schema), t = V(this.schema), s = q(this.schema), n = e === "number" || e === "integer";
    n && d(t) && s === "radio" ? this.ui = new ts(this) : n && d(t) ? this.ui = new ss(this) : n && (this.ui = new qe(this));
  }
}
class ns extends F {
  build() {
    this.control = this.theme.getNullControl({
      id: w(this.instance.path),
      label: I(this.instance.schema) || this.instance.getKey(),
      titleHidden: m(this.instance.schema, "titleHidden") || q(this.instance.schema) === "hidden",
      description: j(this.instance.schema)
    });
  }
  sanitize() {
    return null;
  }
}
class rs extends D {
  setUI() {
    this.ui = new ns(this);
  }
}
class as extends Xe {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor(e) {
    super(), this.options = Object.assign({
      container: null,
      refParser: null,
      enablePropertiesToggle: !1,
      enableCollapseToggle: !1,
      startCollapsed: !1,
      deactivateNonRequired: !1,
      schema: {},
      showErrors: "change",
      data: void 0,
      validateFormat: !1
    }, e), this.rootName = "#", this.pathSeparator = "/", this.instances = {}, this.root = null, this.theme = null, this.validator = null, this.schema = {}, this.refParser = this.options.refParser ? this.options.refParser : null, this.init();
  }
  /**
   * Initializes instance properties
   * @private
   */
  init() {
    this.schema = this.options.schema, this.validator = new jt({ refParser: this.refParser, validateFormat: this.options.validateFormat }), this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    }), d(this.options.data) && this.root.setValue(this.options.data, !1), this.options.container && (this.container = this.options.container, this.appendHiddenInput(), this.container.appendChild(this.root.ui.control.container), this.container.classList.add("jedi-ready")), this.bindEventListeners();
  }
  bindEventListeners() {
    this.root && this.root.on("change", () => {
      this.emit("change");
    }), this.hiddenInput && this.on("change", () => {
      this.hiddenInput.value = JSON.stringify(this.getValue());
    });
  }
  /**
   * Appends a hidden input to the root container whose value will be the value
   * of the root instance.
   * @private
   */
  appendHiddenInput() {
    const e = this.root.ui.theme.getInputControl({
      type: "hidden",
      id: "jedi-hidden-input"
    });
    this.hiddenInput = e.input, this.hiddenInput.setAttribute("name", "json"), this.hiddenInput.removeAttribute("aria-describedby"), this.container.appendChild(this.hiddenInput), this.hiddenInput.value = JSON.stringify(this.getValue());
  }
  /**
   * Adds a child instance pointer to the instances list
   * @private
   */
  register(e) {
    this.instances[e.path] = e;
  }
  /**
   * Deletes a child instance pointer from the instances list
   * @private
   */
  unregister(e) {
    this.instances[e.path] = null, delete this.instances[e.path];
  }
  /**
   * Creates a json instance and dereference schema on the fly if needed.
   * @private
   */
  createInstance(e) {
    this.refParser && (e.schema = this.refParser.expand(e.schema, e.path));
    const t = H(e.schema), s = z(e.schema), n = $(e.schema), r = Te(e.schema), a = Ve(e.schema), o = Oe(e.schema);
    if (d(n) || d(s) || t === "any" || x(t) || U(t))
      return new Ut(e);
    if (d(r) && (d(a) || d(o)))
      return new Ft(e);
    if (t === "object")
      return new _t(e);
    if (t === "array")
      return new Qt(e);
    if (t === "string")
      return new es(e);
    if (t === "number" || t === "integer")
      return new is(e);
    if (t === "boolean")
      return new zt(e);
    if (t === "null")
      return new rs(e);
  }
  /**
   * Returns the value of the root instance
   * @return {*}
   */
  getValue() {
    return this.root.getValue();
  }
  /**
   * Sets the value of the root instance
   */
  setValue() {
    this.root.setValue(...arguments);
  }
  /**
   * Returns an instance by path
   * @return {*}
   */
  getInstance(e) {
    return this.instances[e];
  }
  /**
   * Disables the root instance and it's children user interfaces
   */
  disable() {
    this.root.ui.disable();
  }
  /**
   * Enables the root instance and it's children user interfaces
   */
  enable() {
    this.root.ui.enable();
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    let e = [];
    return Object.keys(this.instances).forEach((t) => {
      const s = this.instances[t];
      e = [...e, ...s.getErrors()];
    }), e;
  }
  /**
   * Destroy the root instance and it's children
   */
  destroy() {
    this.root.destroy(), this.options.container && (this.container.innerHTML = ""), Object.keys(this).forEach((e) => {
      delete this[e];
    });
  }
}
const S = as;
class os {
  constructor() {
    this.refs = {};
  }
  async dereference(e) {
    await this.traverseExternal(e), this.traverseLocal(e);
  }
  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * Initially the added properties will habe a value of null. This value will be later
   * replaced with the resolved schema for that json path using resolveExternal() and resolveLocal().
   *
   * It also adds a new property in the this.refs object with key being the json path to that schema
   * and value being the schema.
   * @param schema
   * @param path
   */
  async traverseExternal(e, t = "#") {
    if (!(typeof e != "object" || e === null))
      for (const [s, n] of Object.entries(e)) {
        const r = t ? `${t}/${s}` : `/${s}`;
        if (this.hasRef(e)) {
          const a = e.$ref;
          if (this.refs[a])
            return;
          if (this.refs[a] = null, this.hasExternalRef(e)) {
            const o = await this.resolveExternal(e);
            await this.traverseExternal(o, r);
          }
        }
        this.refs[t] = e, await this.traverseExternal(n, r);
      }
  }
  traverseLocal(e, t = "#") {
    if (!(typeof e != "object" || e === null))
      for (const [s, n] of Object.entries(e)) {
        const r = t ? `${t}/${s}` : `/${s}`;
        if (this.hasRef(e)) {
          const a = e.$ref;
          if (this.refs[a])
            return;
          if (!this.hasExternalRef(e)) {
            const o = this.resolveLocal(e);
            this.traverseLocal(o, r);
          }
        }
        this.traverseLocal(n, r);
      }
  }
  /**
   * Iterates through the this.refs object keys. If the key is an uri containing "http" or "https" then
   * uses that key as the url in a http request to retrieve the external schema. The retrieved schema
   * will be used for the value of that property
   */
  async resolveExternal(e) {
    const t = e.$ref, s = await this.load(t);
    return this.refs[t] = s, s;
  }
  /**
   * Iterates through the this.refs object keys and resolve all schemas that can be found in this.refs object
   */
  resolveLocal(e) {
    const t = e.$ref;
    let s = null;
    return this.refs[t] && (s = this.refs[t], this.refs[t] = s), s;
  }
  hasRef(e) {
    return typeof e.$ref < "u";
  }
  hasExternalRef(e) {
    const t = e.$ref;
    return typeof t != "string" ? !1 : t.startsWith("http") || t.startsWith("https");
  }
  isCircularRef(e) {
    const t = `"$ref":"${e}"`, s = this.refs[e];
    return JSON.stringify(s).includes(t);
  }
  isObject(e) {
    return e !== null && typeof e == "object";
  }
  expand(e) {
    const t = JSON.parse(JSON.stringify(e));
    if (this.isObject(t) && "$ref" in t) {
      const s = t.$ref;
      return delete t.$ref, Object.assign({}, this.refs[s], t);
    }
    return t;
  }
  /**
   * Loads a schema with a synchronous http request
   * @param uri
   * @returns {any}
   */
  async load(e) {
    try {
      const t = await fetch(e);
      if (!t.ok)
        throw new Error("Network response was not ok");
      return await t.json();
    } catch (t) {
      throw console.error("Error loading", e, t), t;
    }
  }
}
const ls = {
  Jedi: S,
  RefParser: os
};
export {
  ls as default
};
