import React, { useState, useEffect } from 'react';
import { 
  Folder, 
  FileText, 
  Code, 
  Copy, 
  Check, 
  Terminal, 
  LayoutTemplate, 
  ClipboardCheck, 
  MessageSquare, 
  GitMerge,
  PlusCircle,
  Sparkles,
  ArrowRight,
  History,
  Download,
  Share2,
  Trash2,
  Wand2
} from 'lucide-react';

// --- 数据定义：更多预设的模式完整项目文件 ---
const patternData = [
  {
    id: 'tool-wrapper',
    name: '1. 工具包装器 (Tool Wrapper)',
    icon: 'terminal',
    description: '为特定框架提供按需的上下文。这里以 Next.js App Router 专家为例，只有在处理相关代码时才会加载最佳实践。',
    files: [
      {
        path: 'skills/nextjs-expert/SKILL.md',
        type: 'yaml',
        content: `---
name: nextjs-expert
description: Next.js App Router 和 React Server Components (RSC) 开发最佳实践。在编写、审查或调试 Next.js 14+ 应用时使用。
metadata:
  pattern: tool-wrapper
  domain: nextjs
---

你是一个 Next.js 开发专家。请将这些约定应用到用户的代码或问题中。

## 核心约定 (Core Conventions)

加载 'references/conventions.md' 以获取完整的 Next.js 最佳实践列表。

## 当审查代码时 (When Reviewing Code)
1. 加载约定参考文件 (conventions.md)。
2. 根据每个约定检查用户的代码。
3. 对于每个违规行为，引用具体规则并建议修复方案。

## 当编写代码时 (When Writing Code)
1. 加载约定参考文件 (conventions.md)。
2. 严格遵守每一个约定（特别是服务端组件和客户端组件的划分）。
3. 默认使用 Server Components，除非需要交互状态才使用 \`"use client"\`。
4. 使用 TypeScript 进行严格的类型定义。`
      },
      {
        path: 'skills/nextjs-expert/references/conventions.md',
        type: 'markdown',
        content: `# Next.js App Router 最佳实践\n\n1. **默认服务端组件**: 所有组件默认都是 Server Components。只有在需要 \`useState\`, \`useEffect\`, 或事件监听器 (onClick 等) 时，才在文件顶部添加 \`"use client"\`。\n2. **数据获取**: 优先在 Server Components 中直接使用 \`async/await\` 获取数据，不要在客户端使用 \`useEffect\` 抓取初始数据。\n3. **路由处理**: 使用 \`app/api/...\` 目录下的 \`route.ts\` 文件来处理 API 请求 (GET, POST 等)。\n4. **样式**: 默认使用 Tailwind CSS 实用类。\n5. **图片优化**: 始终使用 \`next/image\` 中的 \`<Image />\` 组件，并提供 \`alt\` 属性和尺寸。`
      }
    ]
  },
  {
    id: 'generator',
    name: '2. 生成器 (Generator)',
    icon: 'layout-template',
    description: '强制输出结构一致性。这里以“技术设计文档 (RFC) 生成器”为例，利用模板和样式指南标准化输出。',
    files: [
      {
        path: 'skills/rfc-generator/SKILL.md',
        type: 'yaml',
        content: `---
name: rfc-generator
description: 生成结构化的技术设计文档 (RFC)。当用户要求撰写架构设计、技术方案或 RFC 时使用。
metadata:
  pattern: generator
  output-format: markdown
---

你是一个技术文档生成器。请严格执行以下步骤：

Step 1: 加载 'references/style-guide.md' 获取语气和排版规则。

Step 2: 加载 'assets/rfc-template.md' 获取所需的输出结构。

Step 3: 询问用户以获取填充模板所需的缺失信息（一次性询问）：
- 项目名称及一句话总结
- 核心要解决的问题 (Motivation)
- 建议的技术栈

Step 4: 根据样式指南，使用用户提供的信息填充模板。模板中的每一个部分都必须出现在最终输出中。如果某部分信息不足，请填写“待定 (TBD)”。

Step 5: 将完成的 RFC 作为单个 Markdown 文档返回。`
      },
      {
        path: 'skills/rfc-generator/assets/rfc-template.md',
        type: 'markdown',
        content: `# RFC: [项目名称]\n\n## 1. 概述 (Summary)\n[一句话总结这个设计方案要做什么]\n\n## 2. 动机 (Motivation)\n[我们为什么要这么做？解决了什么痛点？]\n\n## 3. 详细设计 (Detailed Design)\n[系统架构、API 设计、数据库结构等技术细节]\n\n## 4. 缺点与权衡 (Drawbacks & Trade-offs)\n[采用这个方案会带来什么负面影响或技术债务？]\n\n## 5. 替代方案 (Alternatives)\n[我们还考虑了哪些其他方案？为什么不选它们？]`
      }
    ]
  },
  {
    id: 'reviewer',
    name: '3. 评审员 (Reviewer)',
    icon: 'clipboard-check',
    description: '将检查内容与检查方式分离。这里是一个“安全代码审查员”，基于 OWASP 清单按严重程度对代码进行评分。',
    files: [
      {
        path: 'skills/security-reviewer/SKILL.md',
        type: 'yaml',
        content: `---
name: security-reviewer
description: 审查后端代码的安全漏洞。当用户提交代码进行 Review、要求寻找 Bug 或进行安全审计时使用。
metadata:
  pattern: reviewer
  severity-levels: critical,warning,info
---

你是一个资深应用安全工程师。请严格遵循以下审查协议：

Step 1: 加载 'references/owasp-checklist.md' 获取完整的安全审查标准。

Step 2: 仔细阅读用户的代码。在提出批评前，先理解其业务逻辑。

Step 3: 将清单中的每一条规则应用到代码中。对于发现的每一个漏洞：
- 标出代码行号（或大概位置）
- 分类严重程度：critical (必须修复), warning (建议修复), info (最佳实践提示)
- 解释为什么这是一个安全隐患（如：可能导致 SQL 注入）
- 提供具体的、包含修正后代码的修复建议

Step 4: 生成一个结构化的审查报告，包含以下部分：
- **安全摘要**: 代码整体安全状况评估。
- **漏洞发现**: 按严重程度分组（Critical 优先）。
- **行动建议**: 提升系统安全性的前 3 条建议。`
      },
      {
        path: 'skills/security-reviewer/references/owasp-checklist.md',
        type: 'markdown',
        content: `# OWASP 安全审查清单 (精简版)\n\n1. **注入防护 (Injection)**: \n   - 检查所有数据库查询是否使用了参数化查询或 ORM。严禁字符串拼接 SQL。\n   - 检查命令执行 (exec, spawn) 的输入是否经过严格校验。\n2. **跨站脚本 (XSS)**:\n   - 检查返回给前端的数据是否进行了适当的转义。\n3. **身份验证与授权**:\n   - 检查敏感接口是否缺少权限校验。\n   - 检查密码等机密信息是否明文存储。\n4. **敏感数据暴露**:\n   - 检查日志中是否打印了 Token、密码或用户 PII（个人身份信息）。\n5. **错误处理**:\n   - 检查异常捕获逻辑，确保不会向客户端抛出包含堆栈跟踪信息的内部错误。`
      }
    ]
  },
  {
    id: 'inversion',
    name: '4. 反转模式 (Inversion)',
    icon: 'message-square',
    description: '代理变为访谈员，拒绝在收集完完整上下文之前采取行动。非常适合项目规划或数据库设计。',
    files: [
      {
        path: 'skills/db-schema-designer/SKILL.md',
        type: 'yaml',
        content: `---
name: db-schema-designer
description: 通过结构化访谈收集业务需求，然后设计数据库 Schema。当用户要求设计数据库或数据模型时使用。
metadata:
  pattern: inversion
  interaction: multi-turn
---

你正在进行一场结构化的需求收集访谈。在所有阶段完成之前，**严禁**开始生成或设计任何 SQL 表结构。

## Phase 1 — 实体发现 (一次问一个问题，等待用户回答后再问下一个)

按顺序提出以下问题。不要跳过。

- Q1: "这个系统管理的核心业务对象（如：用户、订单、商品）有哪些？"
- Q2: "这些对象之间有什么关系？（例如：一个用户可以有多个订单吗？）"

## Phase 2 — 属性与约束 (必须在 Phase 1 完全解答后进行)

- Q3: "对于上述提到的核心对象，有哪些必须存储的字段？"
- Q4: "有哪些数据是不可重复的（唯一约束），或者不能为空的？"
- Q5: "我们预期的数据规模有多大？读多还是写多？"

## Phase 3 — 综合与设计 (必须在所有问题回答完毕后进行)

1. 基于收集到的需求，设计符合第三范式 (3NF) 的数据库关系图。
2. 输出包含表结构、字段类型、主外键关系的 SQL (PostgreSQL 方言) DDL 语句。
3. 提供关键查询的索引建议。
4. 询问用户："这个 Schema 设计是否满足您的业务需求？您希望调整哪里？"
5. 根据反馈迭代设计。`
      }
    ]
  },
  {
    id: 'pipeline',
    name: '5. 管道模式 (Pipeline)',
    icon: 'git-merge',
    description: '强制执行严格的顺序工作流程，并带有检查点（门控条件）。非常适合 TDD（测试驱动开发）或发布流程。',
    files: [
      {
        path: 'skills/tdd-workflow/SKILL.md',
        type: 'yaml',
        content: `---
name: tdd-workflow
description: 执行严格的测试驱动开发 (TDD) 流程。当用户要求实现新功能并保证有测试覆盖时使用。
metadata:
  pattern: pipeline
  steps: "4"
---

你正在运行一个 TDD (测试驱动开发) 管道。请严格按顺序执行每一步。**严禁**跳过步骤或在某一步失败/未确认时继续。

## Step 1 — 编写失败的测试 (Red)
分析用户要求的功能。使用 Jest 编写对应的单元测试代码。
这些测试在目前应该会失败，因为业务代码还未实现。
将测试代码展示给用户，并询问："测试用例是否准确覆盖了您的需求？"
**门控条件：** 在用户明确确认测试代码之前，严禁进入 Step 2。

## Step 2 — 编写业务逻辑 (Green)
编写能让 Step 1 中的测试刚好通过的最小业务代码逻辑。
展示代码。

## Step 3 — 重构 (Refactor)
审查在 Step 2 中编写的代码。
优化代码结构、消除重复、提高可读性，同时保证测试依然通过。
展示重构后的代码对比。

## Step 4 — 最终审查
核对：
- 所有测试用例已提供
- 业务逻辑已提供且重构完毕
- 代码符合常规 Clean Code 标准
打包最终的代码和测试文件呈现给用户。`
      }
    ]
  },
  {
    id: 'migration-pipeline',
    name: '6. 老旧代码迁移 (Pipeline Combo)',
    icon: 'git-merge',
    description: '[新增案例] 将 Vue2 迁移到 Vue3 的强约束管道，结合了生成与审查逻辑，避免代码转化过程中发生幻觉。',
    files: [
      {
        path: 'skills/vue-migrator/SKILL.md',
        type: 'yaml',
        content: `---
name: vue-migrator
description: 将 Vue2 (Options API) 代码安全地迁移到 Vue3 (Composition API)。
metadata:
  pattern: pipeline-reviewer-combo
---

你是一个前端架构师，负责框架迁移。严禁直接抛出最终代码。按以下步骤执行：

## Step 1 — 分析与映射
读取用户提供的 Vue2 代码。列出所有的 \`data\`, \`methods\`, \`computed\`, \`watch\` 以及生命周期钩子。
询问用户："我已识别以上依赖，是否需要保留原有业务逻辑？"
**等待确认**后再进入下一步。

## Step 2 — 代码生成
加载 'references/vue3-conventions.md'。
严格使用 \`<script setup>\` 语法重新生成代码。使用 \`ref\` 和 \`reactive\`。

## Step 3 — 自我审查
加载 'references/migration-checklist.md'。
逐条检查生成后的 Vue3 代码。如果发现使用已废弃的特性（如 \$on, \$off, 过滤器 filters），立即修正代码。

## Step 4 — 输出与解释
输出最终代码，并简要解释你做了哪些核心更改（例如：如何替代了原有的 EventBus）。`
      },
      {
        path: 'skills/vue-migrator/references/vue3-conventions.md',
        type: 'markdown',
        content: `# Vue 3 迁移最佳实践\n\n1. 统一使用 \`<script setup lang="ts">\`。\n2. 废弃过滤器 (filters)，改用 computed 或普通的 function。\n3. 生命周期映射：\`mounted\` -> \`onMounted\`, \`destroyed\` -> \`onUnmounted\`。\n4. 推荐将相关联的逻辑抽离为 \`useComposable\` 函数。`
      }
    ]
  }
];

export default function App() {
  const [viewMode, setViewMode] = useState('explore'); // 'explore', 'create', 'history'
  const [activePatternIndex, setActivePatternIndex] = useState(0);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  
  // 提示状态
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [autoRecommendedMsg, setAutoRecommendedMsg] = useState('');

  // 历史记录状态 (使用本地存储)
  const [historyItems, setHistoryItems] = useState(() => {
    try {
      const saved = localStorage.getItem('adk_skills_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('adk_skills_history', JSON.stringify(historyItems));
    } catch (e) {
      console.error("Local storage failed", e);
    }
  }, [historyItems]);

  // 定制生成状态
  const [formData, setFormData] = useState({
    name: 'my-custom-skill',
    description: '处理特定项目任务的自定义技能。',
    pattern: 'combo-pipeline-reviewer',
    context: '我需要一个负责处理国际化 (i18n) 语言包提取和校验的工具。它需要先提取代码中的中文，然后按照规范检查翻译是否合规。'
  });
  
  const [generatedPattern, setGeneratedPattern] = useState<any>(null);

  // 计算当前显示的模式和文件
  let activePattern: any;
  if (viewMode === 'explore') activePattern = patternData[activePatternIndex];
  else if (viewMode === 'create') activePattern = generatedPattern;
  else if (viewMode === 'history') activePattern = historyItems[activePatternIndex] || historyItems[0];
  
  const activeFile = activePattern ? activePattern.files[activeFileIndex] : null;

  // --- 辅助函数：渲染图标 ---
  const renderIcon = (icon: any, size = 18, className = "") => {
    // 处理旧的存储数据（如果是对象则回退到默认图标）
    const iconName = typeof icon === 'string' ? icon : 'folder';
    
    switch (iconName) {
      case 'terminal': return <Terminal size={size} className={className} />;
      case 'layout-template': return <LayoutTemplate size={size} className={className} />;
      case 'clipboard-check': return <ClipboardCheck size={size} className={className} />;
      case 'message-square': return <MessageSquare size={size} className={className} />;
      case 'git-merge': return <GitMerge size={size} className={className} />;
      case 'history': return <History size={size} className={className} />;
      default: return <Folder size={size} className={className} />;
    }
  };

  // --- 操作函数 ---

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    }).catch(err => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setter(true);
        setTimeout(() => setter(false), 2000);
      } catch (err) {}
      document.body.removeChild(textArea);
    });
  };

  const handleCopyFile = () => copyToClipboard(activeFile?.content || '', setCopied);
  
  const handleSharePattern = () => {
    if (!activePattern) return;
    const shareText = activePattern.files.map((f: any) => `=== [${f.path}] ===\n${f.content}\n`).join('\n\n');
    copyToClipboard(shareText, setShared);
  };

  const handleDownloadFile = () => {
    if (!activeFile) return;
    const blob = new Blob([activeFile.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeFile.path.split('/').pop() || 'download.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 智能架构推荐引擎
  const handleAutoRecommend = () => {
    const text = (formData.description + " " + formData.context).toLowerCase();
    let recommended = 'combo-pipeline-reviewer'; // default
    let reason = "检测到多步或复杂需求，推荐组合模式";

    if (/(审查|检查|审计|核对|验证|bug|review|check)/.test(text)) {
      recommended = 'reviewer';
      reason = "检测到审查/验证意图，推荐「评审员」模式分离检查标准";
    } else if (/(生成|创建|模板|文档|generate|create|template)/.test(text)) {
      recommended = 'generator';
      reason = "检测到内容生成意图，推荐「生成器」模式约束结构";
    } else if (/(管道|步骤|流程|先|然后|pipeline|workflow|step)/.test(text)) {
      recommended = 'pipeline';
      reason = "检测到多阶段流转，推荐「管道」模式强制执行顺序";
    } else if (/(提问|收集|访谈|设计系统|ask|interview)/.test(text)) {
      recommended = 'inversion';
      reason = "检测到需要收集前置条件，推荐「反转访谈」模式";
    } else if (/(规范|最佳实践|使用库|框架|专家|conventions)/.test(text)) {
      recommended = 'tool-wrapper';
      reason = "检测到框架专精需求，推荐「工具包装器」注入按需上下文";
    }

    setFormData({ ...formData, pattern: recommended });
    setAutoRecommendedMsg(reason);
    setTimeout(() => setAutoRecommendedMsg(''), 4000);
  };

  // 动态生成技能模板核心逻辑
  const handleGenerate = () => {
    const { name, description, pattern, context } = formData;
    let files: any[] = [];
    const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'custom-skill';

    // 基于选择的模式生成不同的模板架构
    if (pattern === 'tool-wrapper') {
      files = [
        {
          path: `skills/${safeName}/SKILL.md`,
          type: 'yaml',
          content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: tool-wrapper
---

你是一个专门处理该项目特定任务的专家。

## 项目背景
${context}

## 核心工作流
加载 'references/project-conventions.md' 获取必须遵守的最佳实践和规范。

1. 在执行任何代码修改或建议前，先应用参考文件中的规则。
2. 确保你的输出完全符合约定的架构和规范。
3. 如果用户的要求违背了规范，礼貌地指出并提供符合规范的替代方案。`
        },
        {
          path: `skills/${safeName}/references/project-conventions.md`,
          type: 'markdown',
          content: `# 项目核心约定与规范\n\n1. **原则一**: [在此补充特定规范]\n2. **原则二**: [在此补充特定规范]`
        }
      ];
    } else if (pattern === 'generator') {
      files = [
        {
          path: `skills/${safeName}/SKILL.md`,
          type: 'yaml',
          content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: generator
---

你是一个专业的生成器代理。

## 任务背景
${context}

## 执行步骤
1. 加载 'assets/output-template.md'。
2. 收集必要的信息（如果信息不足，先向用户提问）。
3. 严格按照模板结构填充信息，不要遗漏章节。
4. 输出最终内容。`
        },
        {
          path: `skills/${safeName}/assets/output-template.md`,
          type: 'markdown',
          content: `# 生成物标题\n\n## 1. 摘要\n[填写内容]\n\n## 2. 详情\n[填写详情]`
        }
      ];
    } else if (pattern === 'reviewer') {
      files = [
        {
          path: `skills/${safeName}/SKILL.md`,
          type: 'yaml',
          content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: reviewer
---

你是一个专业的评审员。

## 任务背景
${context}

## 评审协议
1. 加载 'references/checklist.md' 获取评审标准。
2. 仔细阅读用户提供的内容。
3. 逐条对照标准进行检查，指出不足并提供改进建议。`
        },
        {
          path: `skills/${safeName}/references/checklist.md`,
          type: 'markdown',
          content: `# 评审检查清单\n\n1. **准确性**: 内容是否准确无误？\n2. **完整性**: 是否覆盖了所有必要点？`
        }
      ];
    } else if (pattern === 'inversion') {
      files = [
        {
          path: `skills/${safeName}/SKILL.md`,
          type: 'yaml',
          content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: inversion
---

你是一个访谈式需求分析专家。

## 任务背景
${context}

## 访谈指南
加载 'references/interview-guide.md'。

1. 严禁直接开始执行任务。
2. 按照指南中的问题顺序，一次只问一个问题。
3. 在收集齐所有必要信息后，再给出最终方案。`
        },
        {
          path: `skills/${safeName}/references/interview-guide.md`,
          type: 'markdown',
          content: `# 访谈问题清单\n\n1. 目标受众是谁？\n2. 核心痛点是什么？\n3. 预期的输出格式？`
        }
      ];
    } else if (pattern === 'pipeline') {
      files = [
        {
          path: `skills/${safeName}/SKILL.md`,
          type: 'yaml',
          content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: pipeline
---

你是一个严格的管道执行代理。

## 任务背景
${context}

## 管道步骤
加载 'references/workflow-config.md'。

1. 严格按照顺序执行步骤。
2. 每一步完成后，向用户确认结果。`
        },
        {
          path: `skills/${safeName}/references/workflow-config.md`,
          type: 'markdown',
          content: `# 工作流配置\n\n- Step 1: 初始化\n- Step 2: 处理\n- Step 3: 交付`
        }
      ];
    } else if (pattern === 'combo-pipeline-reviewer') {
      files = [
        {
          path: `skills/${safeName}/SKILL.md`,
          type: 'yaml',
          content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: pipeline-reviewer-combo
  steps: "3"
---

你是一个严格的任务执行和审查代理。请严格按顺序执行以下管道步骤。**严禁跳过步骤**。

## 任务背景
${context}

## Step 1 — 分析与提取 (Pipeline)
分析用户提供的文件或需求。
提取关键信息并给出一个执行计划纲要。
**门控条件：** 询问用户 "这个计划是否正确？"。在用户确认前，严禁进入 Step 2。

## Step 2 — 核心处理 (Pipeline)
根据 Step 1 确认的计划执行主要任务。生成初步结果。

## Step 3 — 质量审查 (Reviewer)
在输出最终结果之前，必须加载自我审查：
1. 加载 'references/quality-checklist.md'。
2. 对 Step 2 产生的内容进行逐条评分和核对。自动修正错误。
3. 向用户展示最终结果及审查报告。`
        },
        {
          path: `skills/${safeName}/references/quality-checklist.md`,
          type: 'markdown',
          content: `# 质量审查检查表\n\n- [ ] **完整性**: 是否满足业务需求约束？\n- [ ] **健壮性**: 边缘场景是否处理？\n- [ ] **规范性**: 格式是否标准？`
        }
      ];
    } else {
      // 默认生成
      files = [{
        path: `skills/${safeName}/SKILL.md`,
        type: 'yaml',
        content: `---
name: ${safeName}
description: ${description}
metadata:
  pattern: ${pattern}
---

## 任务背景与要求
${context}

## 执行指令
1. 仔细阅读用户的意图。
2. 根据上述背景信息，提供结构化的响应。`
      }];
    }

    const newPattern = {
      id: `history-${Date.now()}`,
      name: `✨ ${name} (${new Date().toLocaleTimeString()})`,
      icon: 'history',
      description: `基于定制需求生成的技能 [架构: ${pattern}]`,
      files: files,
      createdAt: new Date().toISOString()
    };

    setGeneratedPattern(newPattern);
    
    // 保存到历史记录
    setHistoryItems([newPattern, ...historyItems]);
    setActiveFileIndex(0);
  };

  const handleDeleteHistory = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // 阻止触发选中
    const newHistory = [...historyItems];
    newHistory.splice(index, 1);
    setHistoryItems(newHistory);
    
    // 如果删除的是当前查看的项，或者列表空了，重置状态
    if (newHistory.length === 0) {
      setViewMode('explore');
      setActivePatternIndex(0);
    } else if (activePatternIndex >= newHistory.length) {
      setActivePatternIndex(Math.max(0, newHistory.length - 1));
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* --- 左侧边栏 --- */}
      <div className="w-80 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-10 overflow-hidden">
        <div className="p-6 bg-slate-950 text-white shrink-0">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Folder size={24} className="text-blue-400" />
            ADK 技能工作台
          </h1>
        </div>

        {/* 导航 Tabs */}
        <div className="flex bg-slate-800 p-2 gap-1 m-4 rounded-lg shrink-0">
          <button 
            onClick={() => { setViewMode('explore'); setActiveFileIndex(0); setActivePatternIndex(0); }}
            className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors flex flex-col items-center gap-1 ${viewMode === 'explore' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Folder size={16}/> 预设案例
          </button>
          <button 
            onClick={() => { setViewMode('create'); setActiveFileIndex(0); }}
            className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors flex flex-col items-center gap-1 ${viewMode === 'create' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <PlusCircle size={16} /> 定制生成
          </button>
          <button 
            onClick={() => { setViewMode('history'); setActiveFileIndex(0); setActivePatternIndex(0); }}
            className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors flex flex-col items-center gap-1 relative ${viewMode === 'history' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <History size={16} /> 历史库
            {historyItems.length > 0 && (
              <span className="absolute top-1 right-2 w-2 h-2 bg-amber-400 rounded-full"></span>
            )}
          </button>
        </div>

        {/* 列表区域 (Explore 或 History) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {viewMode === 'explore' && patternData.map((pattern, index) => (
            <button
              key={pattern.id}
              onClick={() => { setActivePatternIndex(index); setActiveFileIndex(0); }}
              className={`w-full text-left px-5 py-3 border-l-4 transition-colors duration-200 flex flex-col gap-2
                ${activePatternIndex === index 
                  ? 'border-blue-500 bg-slate-800 text-white' 
                  : 'border-transparent hover:bg-slate-800/50 hover:text-slate-100'}`}
            >
              <div className="flex items-center gap-3 font-semibold text-sm">
                <span className={`${activePatternIndex === index ? 'text-blue-400' : 'text-slate-500'}`}>
                  {renderIcon(pattern.icon)}
                </span>
                {pattern.name}
              </div>
            </button>
          ))}

          {viewMode === 'history' && historyItems.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-sm flex flex-col items-center gap-2">
              <History size={24} className="opacity-50" />
              暂无保存的技能记录<br/>请前往"定制生成"创建
            </div>
          )}

          {viewMode === 'history' && historyItems.map((pattern: any, index: number) => (
            <div
              key={pattern.id}
              onClick={() => { setActivePatternIndex(index); setActiveFileIndex(0); }}
              className={`w-full text-left px-5 py-3 border-l-4 transition-colors duration-200 group cursor-pointer
                ${activePatternIndex === index 
                  ? 'border-amber-500 bg-slate-800 text-white' 
                  : 'border-transparent hover:bg-slate-800/50 hover:text-slate-100'}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-semibold text-sm truncate">
                  <span className={`${activePatternIndex === index ? 'text-amber-400' : 'text-slate-500'}`}>
                    {renderIcon(pattern.icon)}
                  </span>
                  <span className="truncate">{pattern.name}</span>
                </div>
                <button 
                  onClick={(e) => handleDeleteHistory(e, index)}
                  className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-400 transition-opacity p-1"
                  title="删除此记录"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}

          {viewMode === 'create' && generatedPattern && (
             <div className="m-4 p-4 rounded bg-slate-800 border border-slate-700">
                <div className="flex items-center gap-2 font-medium text-amber-400 text-sm mb-2">
                  <Sparkles size={16} />
                  已生成临时草稿
                </div>
                <div className="text-xs text-slate-400">
                  配置已自动保存至【历史库】。您可以在右侧预览并下载。
                </div>
             </div>
          )}
        </div>

        <div className="p-4 text-xs text-slate-600 bg-slate-950 mt-auto shrink-0 border-t border-slate-900">
          基于 ADK 最佳实践模式
        </div>
      </div>

      {/* --- 右侧主内容区 --- */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
        
        {viewMode === 'create' && !generatedPattern ? (
          /* 创建表单视图 */
          <div className="flex-1 p-8 overflow-y-auto bg-slate-50 custom-scrollbar">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <PlusCircle className="text-blue-600" /> 
                定制项目级 SKILL
              </h2>
              <p className="text-slate-500 mb-8 text-sm">
                描述你的任务目标，我们将结合最佳设计模式为你生成多文件相互协同的 Agent 技能包。
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">技能名称 (标识符)</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">简短描述</label>
                    <input 
                      type="text" 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label className="block text-sm font-medium text-slate-700">项目核心上下文与要求</label>
                  </div>
                  <textarea 
                    rows={4}
                    value={formData.context}
                    onChange={(e) => setFormData({...formData, context: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="描述这个 Agent 需要做什么任务？有什么项目级别的红线规则？"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-slate-700">选择底层架构模式</label>
                    <button 
                      onClick={handleAutoRecommend}
                      className="text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full flex items-center gap-1 transition"
                    >
                      <Wand2 size={12}/> AI 智能推荐架构
                    </button>
                  </div>
                  
                  {autoRecommendedMsg && (
                    <div className="mb-2 text-xs text-amber-600 bg-amber-50 p-2 rounded border border-amber-100 flex items-center gap-2 animate-pulse">
                      <Sparkles size={14}/> {autoRecommendedMsg}
                    </div>
                  )}

                  <select 
                    value={formData.pattern}
                    onChange={(e) => setFormData({...formData, pattern: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium"
                  >
                    <option value="combo-pipeline-reviewer">🔥 组合模式：管道 + 评审员 (推荐，严控质量与流程)</option>
                    <option value="tool-wrapper">工具包装器 (注入项目独有规范/上下文)</option>
                    <option value="generator">生成器 (基于提供模板填充信息)</option>
                    <option value="inversion">反转访谈模式 (让AI主动向你收集前置条件)</option>
                    <option value="pipeline">纯管道模式 (强制多步执行步骤)</option>
                    <option value="reviewer">纯评审员模式 (分离审查标准)</option>
                  </select>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={handleGenerate}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-500/30"
                  >
                    生成技能结构包 <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : activePattern ? (
          /* 代码预览视图 (Explore, History 或 Create 生成后) */
          <>
            <div className={`p-6 border-b border-slate-200 shrink-0 ${viewMode === 'create' || viewMode === 'history' ? 'bg-amber-50/40' : 'bg-white'}`}>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    {renderIcon(activePattern.icon, 20)}
                    {activePattern.name}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activePattern.description}
                  </p>
                </div>
                
                {/* 顶层工具栏：分享当前整个 Pattern */}
                <div className="flex flex-col gap-2 shrink-0">
                  {viewMode === 'create' && (
                    <button 
                      onClick={() => setGeneratedPattern(null)}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md transition border border-blue-200 w-full"
                    >
                      重新配置参数
                    </button>
                  )}
                  <button 
                    onClick={handleSharePattern}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition"
                  >
                    {shared ? <Check size={14} className="text-green-500" /> : <Share2 size={14} />}
                    {shared ? '已复制全套内容' : '一键复制全套'}
                  </button>
                </div>
              </div>
            </div>

            {/* 文件目录 Tabs */}
            <div className={`flex px-6 pt-3 border-b border-slate-200 overflow-x-auto shrink-0 ${viewMode === 'create' || viewMode === 'history' ? 'bg-amber-50/20' : 'bg-slate-50'}`}>
              {activePattern.files.map((file: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveFileIndex(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                    ${activeFileIndex === index 
                      ? 'border-blue-500 text-blue-700 bg-white rounded-t-lg shadow-sm' 
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 rounded-t-lg'}`}
                >
                  <FileText size={16} className={activeFileIndex === index ? 'text-blue-500' : 'text-slate-400'} />
                  {file.path.split('/').pop()} {/* 只显示文件名使 Tab 更紧凑 */}
                </button>
              ))}
            </div>

            {/* 代码编辑器视图 */}
            <div className={`flex-1 p-6 overflow-hidden flex flex-col ${viewMode === 'create' || viewMode === 'history' ? 'bg-slate-50' : 'bg-slate-100/50'}`}>
              {activeFile && (
                <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-[#1e1e1e] text-slate-50 flex flex-col h-full">
                  
                  {/* 编辑器顶栏 */}
                  <div className="flex justify-between items-center px-4 py-2.5 bg-[#252526] border-b border-black/20 shrink-0">
                    <div className="flex items-center gap-2 truncate pr-4">
                      <Code size={16} className="text-slate-400 shrink-0" />
                      <span className="text-xs font-mono text-slate-300 truncate opacity-80" title={activeFile.path}>
                        {activeFile.path}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 shrink-0">
                      <button 
                        onClick={handleDownloadFile}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded text-slate-300 hover:text-white hover:bg-slate-700 transition"
                        title="下载此单文件"
                      >
                        <Download size={14} />下载
                      </button>
                      <button 
                        onClick={handleCopyFile}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-[#0e639c] hover:bg-[#1177bb] text-white transition-colors"
                        title="复制文件内容"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? '已复制' : '复制'}
                      </button>
                    </div>
                  </div>

                  {/* 代码内容区域 */}
                  <div className="flex-1 overflow-auto p-5 custom-scrollbar bg-[#1e1e1e]">
                    <pre className="text-[13px] font-mono leading-loose whitespace-pre-wrap break-words">
                      <code className="text-[#d4d4d4]">
                        {activeFile.content}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>

      {/* 自定义滚动条样式 (注入全局) */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.4); /* slate-400 with opacity */
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.6); /* slate-500 */
        }
        /* VS Code 风格深色编辑器滚动条 */
        .bg-\\[\\#1e1e1e\\]::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        .bg-\\[\\#1e1e1e\\]::-webkit-scrollbar-thumb {
          background: #424242;
        }
        .bg-\\[\\#1e1e1e\\]::-webkit-scrollbar-thumb:hover {
          background: #4f4f4f;
        }
      `}} />
    </div>
  );
}
