module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init', // 初始化
        'feat', // 新功能（feature）
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'fix', // 修补bug
        'ci', // 对ci配置文件和脚本的修改
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'perf', // 性能优化
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'build', // 打包
      ],
    ],
  },
};
