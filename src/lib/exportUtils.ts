// Helper function for downloading files
function downloadFile(content: string, fileName: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Helper to sanitize file names
const getSanitizedTitle = (title: string) =>
  title.replace(/[^a-z0-9]/gi, "_").toLowerCase();

// 1. Export to CSV Format
export function exportToCSV(
  formTitle: string,
  responses: any[],
  questions: any[],
) {
  if (!responses || !responses.length) return;

  const headers = [
    "Submission Date",
    ...questions.map((q) => q.label || q.text || "Question"),
  ];
  const rows = responses.map((res) => {
    const answers = (res.answers as Record<string, any>) || {};
    const date = new Date(res.createdAt).toLocaleString();
    return [date, ...questions.map((q) => answers[q.id] ?? "N/A")];
  });

  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(","),
    ),
  ].join("\n");

  downloadFile(
    csvContent,
    `${getSanitizedTitle(formTitle)}_responses.csv`,
    "text/csv;charset=utf-8;",
  );
}

// 2. Export to TSV Format (Excel friendly)
export function exportToTSV(
  formTitle: string,
  responses: any[],
  questions: any[],
) {
  if (!responses || !responses.length) return;

  const headers = [
    "Submission Date",
    ...questions.map((q) => q.label || q.text || "Question"),
  ];
  const rows = responses.map((res) => {
    const answers = (res.answers as Record<string, any>) || {};
    const date = new Date(res.createdAt).toLocaleString();
    return [date, ...questions.map((q) => answers[q.id] ?? "N/A")];
  });

  const tsvContent = [
    headers.join("\t"),
    ...rows.map((row) =>
      row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join("\t"),
    ),
  ].join("\n");

  downloadFile(
    tsvContent,
    `${getSanitizedTitle(formTitle)}_responses.tsv`,
    "text/tab-separated-values;charset=utf-8;",
  );
}

// 3. Export to TXT Format
export function exportToTXT(
  formTitle: string,
  responses: any[],
  questions: any[],
) {
  if (!responses || !responses.length) return;

  let txtContent = `FORM RESPONSES: ${formTitle}\n`;
  txtContent += `Total Submissions: ${responses.length}\n`;
  txtContent += "=====================================\n\n";

  responses.forEach((res, index) => {
    const answers = (res.answers as Record<string, any>) || {};
    txtContent += `Submission #${responses.length - index} (${new Date(res.createdAt).toLocaleString()})\n`;

    questions.forEach((q) => {
      const qText = q.label || q.text || "Question";
      const ansVal = answers[q.id] ?? "N/A";
      txtContent += `- ${qText}: ${ansVal}\n`;
    });
    txtContent += "-------------------------------------\n\n";
  });

  downloadFile(
    txtContent,
    `${getSanitizedTitle(formTitle)}_responses.txt`,
    "text/plain;charset=utf-8;",
  );
}

// 4. Export to JSON Format
export function exportToJSON(formTitle: string, responses: any[]) {
  if (!responses || !responses.length) return;

  const jsonString = JSON.stringify(responses, null, 2);
  downloadFile(
    jsonString,
    `${getSanitizedTitle(formTitle)}_responses.json`,
    "application/json;charset=utf-8;",
  );
}

// 5. Print / Save as PDF (Using browser print engine)
export function exportToPDF(
  formTitle: string,
  responses: any[],
  questions: any[],
) {
  if (!responses || !responses.length) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  const htmlContent = `
    <html>
      <head>
        <title>${formTitle} - Responses</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
          h1 { font-size: 20px; border-bottom: 2px solid #ddd; padding-bottom: 10px; }
          .submission { border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; border-radius: 8px; page-break-inside: avoid; }
          .sub-header { font-weight: bold; color: #6b21a8; margin-bottom: 10px; font-size: 14px; }
          .qa-pair { margin-bottom: 8px; font-size: 13px; }
          .question { color: #555; font-weight: bold; }
          .answer { color: #000; }
        </style>
      </head>
      <body>
        <h1>${formTitle} - Submissions (${responses.length})</h1>
        ${responses
          .map((res, index) => {
            const answers = (res.answers as Record<string, any>) || {};
            const date = new Date(res.createdAt).toLocaleString();
            return `
            <div class="submission">
              <div class="sub-header">Submission #${responses.length - index} &bull; ${date}</div>
              ${questions
                .map(
                  (q) => `
                <div class="qa-pair">
                  <span class="question">${q.label || q.text}:</span> 
                  <span class="answer">${answers[q.id] ?? "N/A"}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          `;
          })
          .join("")}
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
