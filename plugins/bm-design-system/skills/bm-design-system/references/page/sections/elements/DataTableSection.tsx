import { SectionShell } from "@/components/design-system/SectionShell";
import { Badge } from "@/components/ui/badge";
import { DataTable, DataRow } from "@/components/ui/data-table";

const code = `<DataTable>
  <DataRow title="Status">
    <Badge tone="accent">Active</Badge>
  </DataRow>
  <DataRow title="Owner">Marie Chen</DataRow>
  <DataRow title="Description">
    A longer value can wrap and flow across multiple lines without breaking the
    visual rhythm of the table.
  </DataRow>
  <DataRow title="Updated">May 16, 2026 at 1:27pm</DataRow>
</DataTable>`;

export function DataTableSection() {
  return (
    <SectionShell
      id="data-table"
      title="Data table"
      description={
        <>
          A vertical key/value table for displaying record details. Each row
          is a horizontal stripe with a title on the left and a value on the
          right. Rows stack on mobile; from <code>md</code>, the title takes
          1 column and the value spans 3 (out of 4); from <code>xl</code>,
          the value spans 4 (out of 5) so wider screens give the value more
          room while the title stays the same size.
        </>
      }
      whenToUse={
        <ul>
          <li>Summarizing the fields of a single record (a video, a profile, a settings panel).</li>
          <li>Read-only metadata views where each line is a labeled value.</li>
          <li>Anywhere a long stack of <code>&lt;h3&gt;</code> + paragraph blocks is harder to scan than a labeled grid.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Collections of similar items — use Listings instead.</li>
          <li>Dense, multi-column tabular data — use a real <code>&lt;table&gt;</code>.</li>
          <li>Editable forms — use the Forms primitives.</li>
        </ul>
      }
      preview={
        <DataTable>
          <DataRow title="Status">
            <Badge tone="accent">Active</Badge>
          </DataRow>
          <DataRow title="Owner">Marie Chen</DataRow>
          <DataRow title="Description">
            A longer value can wrap and flow across multiple lines without
            breaking the visual rhythm of the table. On wider screens the
            value takes more room so long copy doesn't have to wrap as
            aggressively.
          </DataRow>
          <DataRow title="Notes">
            Drop any node in here — text, a Badge, a list, a small grid of
            nested values.
          </DataRow>
          <DataRow title="Updated">May 16, 2026 at 1:27pm</DataRow>
        </DataTable>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <code>&lt;DataRow title&gt;</code> accepts any node — usually a
            short label, but can include an icon or a small badge.
          </li>
          <li>
            Values are <code>text-ink-body</code> by default. Drop in any node:
            text, a Badge, a list, a small grid of nested values.
          </li>
          <li>
            <strong>Responsive grid</strong>: stacked (single column) under{" "}
            <code>md</code> — title sits above value, divider rhythm
            preserved. From <code>md</code> (768px), 4 columns with title{" "}
            <code>md:col-span-1</code> and value <code>md:col-span-3</code>.
            From <code>xl</code> (1280px), 5 columns with value{" "}
            <code>xl:col-span-4</code>.
          </li>
          <li>
            Wrap the table in a card (<code>rounded-lg border border-hairline</code>) if
            it needs to feel like its own panel.
          </li>
        </ul>
      }
    />
  );
}
