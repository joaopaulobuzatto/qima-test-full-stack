package br.com.joaopaulobuzatto.qimatestfullstack.domain;

import static br.com.joaopaulobuzatto.qimatestfullstack.domain.CategoryTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import br.com.joaopaulobuzatto.qimatestfullstack.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class CategoryTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Category.class);
        Category category1 = getCategorySample1();
        Category category2 = new Category();
        assertThat(category1).isNotEqualTo(category2);

        category2.setId(category1.getId());
        assertThat(category1).isEqualTo(category2);

        category2 = getCategorySample2();
        assertThat(category1).isNotEqualTo(category2);
    }
}
