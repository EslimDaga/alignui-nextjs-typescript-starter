import { createMcpHandler } from 'mcp-handler';

import { registerTools, SERVER_INSTRUCTIONS } from '@/lib/mcp/tools';

const handler = createMcpHandler(registerTools, {
  serverInfo: { name: 'alignui-mcp-server', version: '1.0.0' },
  instructions: SERVER_INSTRUCTIONS,
});

export { handler as DELETE, handler as GET, handler as POST };
