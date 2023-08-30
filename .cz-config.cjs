module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:     新功能',
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:      修复bug',
    },
    {
      value: ':tada: init',
      name: '🎉 init:     初始化',
    },
    {
      value: ':pencil2: docs',
      name: '✏️  docs:     文档变更',
    },
    {
      value: ':lipstick: style',
      name: '💄 style:    代码的样式美化',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor: 重构',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:     性能优化',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:     测试',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:   回退',
    },
    {
      value: ':package: build',
      name: '📦️ build:    打包',
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore:    构建/工程依赖/工具',
    },
    {
      value: ':construction_worker: ci',
      name: '👷 ci:       CI related changes',
    },
  ],
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    };
  }),
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？',
  },
  allowCustomScopes: true,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 72,
};
