const decorator = (Story) => `
  <div class="au-body au-grid">
    <div class="container">
      <div class="row">
        ${Story()}
      </div>
    </div>
  </div>
`;

export default [decorator];
