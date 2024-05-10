package br.com.joaopaulobuzatto.qimatestfullstack.domain;

import static br.com.joaopaulobuzatto.qimatestfullstack.domain.CategoryTestSamples.*;
import static br.com.joaopaulobuzatto.qimatestfullstack.domain.ProductTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import br.com.joaopaulobuzatto.qimatestfullstack.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProductTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Product.class);
        Product product1 = getProductSample1();
        Product product2 = new Product();
        assertThat(product1).isNotEqualTo(product2);

        product2.setId(product1.getId());
        assertThat(product1).isEqualTo(product2);

        product2 = getProductSample2();
        assertThat(product1).isNotEqualTo(product2);
    }

    @Test
    void categoryPathTest() throws Exception {
        Product product = getProductRandomSampleGenerator();
        Category categoryBack = getCategoryRandomSampleGenerator();

        product.setCategoryPath(categoryBack);
        assertThat(product.getCategoryPath()).isEqualTo(categoryBack);

        product.categoryPath(null);
        assertThat(product.getCategoryPath()).isNull();
    }
}
