module.exports = (config, injectableRule, pushOnly) => {
    const rules = config.module.rules;
    const oneOfRule = rules.find((rule) => {
        return !!rule.oneOf;
    });

    if (!pushOnly && oneOfRule) {
        oneOfRule.oneOf.unshift(injectableRule);
    } else {
        rules.push(injectableRule);
    }
}